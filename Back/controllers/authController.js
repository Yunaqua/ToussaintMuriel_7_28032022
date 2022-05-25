require('dotenv').config();
const mysql = require('mysql');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
var models    = require('../models');

const db = mysql.createConnection({

	host     : 'localhost',
	user     : 'root',
	password : process.env.MYSQL_MDP,
	database : process.env.MYSQL_DATABASE
})

exports.register = (req,res) => {
    console.log(req.body);
    
    const { nom,prenom,sexe, age, email, password} = req.body;

    models.User.findOne({
        attributes : ['email'],
        where : {email: email}
    })
    .then( function(userFound) {
        if(!userFound){
            bcrypt.hash(password,10, function(err, bcryptedPassword) {
                var newUser = models.User.create({
                    nom : nom,
                    prenom : prenom,
                    email : email,
                    sexe : sexe,
                    age : age,
                    password : bcryptedPassword,
                    isAdmin : 0
                })
                .then(function(newUser) {
                    return res.status(201).json({'userId' : newUser.id})
                })
                .catch( function(err) {
                    return res.status(500).json({ 'error' :"Ajout impossible"});
                });
            });//bcrypt
        }else{
            return res.status(400).send({'error' :"L'adresse email existe déja"})
        }

    })
    .then( function(err) {
        return res.status(500).send({'error': "L'adresse email ne convient pas"});
    })
    
}//export


exports.login = (req,res) => {
    //console.log(req.body);
    const { email, password} = req.body;
   
    db.query("SELECT email FROM user WHERE email = ?" ,
        [email], async (error, results)=> {
            if(error) {
                console.log(error);
            }if( results.length == 0){// results est un tableau
                return res.status(401).json({ error: "L'email est incorrect !" });
            }
            
            db.query(`SELECT password FROM user WHERE email= ?`, 
            [email], async (error, results)=> {
                //console.log(email +" " +results[0].password);
           
               const compare = await bcrypt.compare(password, results[0].password)
               console.log(compare +" resultat compare")
                    if(!compare) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                        console.log(error);
                    }else{
                        db.query("SELECT id FROM user WHERE email = ?" ,
                            [email], async (error, results)=> {
                                if(error){
                                    return res.status(401).json({ error: "Erreur d'utilisateur !" });
                                    console.log(error);
                                }else{
                                    //console.log(results[0].id);
                                    const token = jwt.sign({id:results[0].id},'SECRET-KEY',{ expiresIn: '12h' });
                                    let localstorage = "";
                                    return res.status(200).send({
                                        msg: 'Logged in!',
                                        token,
                                        user: results[0]
                                    });
                                }
                                
                            }
                        )//db query
                        console.log("You are log in");
                    }
                //bcrypt
            });//query
           

    });//query

}//export