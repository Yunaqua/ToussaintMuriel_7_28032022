require('dotenv').config();
const mysql = require('mysql2');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
var models = require('../models');
const path = require('path'); 


//Get Page model
var User = require('../models').User;

const db = mysql.createConnection({

	host     : 'localhost',
	user     : process.env.MYSQL_USER,
	password : process.env.MYSQL_MDP,
	database : process.env.MYSQL_DATABASE
})

exports.register = (req,res) => {
    console.log(req.body);
    
    const { nom,prenom,sexe, age, email, password} = req.body;
    //console.log( ' <=> ' , email);

    User.findOne({
        where: {email: req.body.email}
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
                    console.log('Utilisateur créer');
                })
                .catch( function(err) {
                    return res.status(500).json({ 'error' :"Ajout impossible"});
                });
            });//bcrypt
        }else{
            return res.status(400).send({'error' :"L'adresse email existe déja"})
        }

    })
    .catch( function(err) {
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
           
               const compare = await bcrypt.compare(password, results[0].password)
               
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
                                    
                                    db.query("SELECT * FROM user WHERE email= ?", 
                                        [email], async (error, results)=> {
                                            return res.status(200).send({
                                                msg: 'Logged in!',
                                                token,
                                                user: results[0]
                                            });
                                        })//dbquery all data
                                   
                                }
                                
                            }
                        )//db query select id
                        
                        console.log("You are log in");
                    }
                //bcrypt
            });//query

    });//query

}//export
