require('dotenv').config();
const mysql = require('mysql2');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
let models = require('../models');
const path = require('path'); 


//Get Page model
let User = require('../models').User;

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
                    return res.status(201).json({'Création du profil , userId' : newUser.id})
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


exports.login =  async (req,res) => {
    
    var { email, password} = req.body;
    console.log(req.body.email);

    User.findOne({
        //attributes: { exclude: ['password'] },
        where: {email: req.body.email}
        
        })
    .then(user => {
        
            
           const comparepwd =  bcrypt.compareSync(password, user.password);
            console.log(comparepwd , "compare")
            if(!comparepwd){
                return res.status(401).json({msg :' Mot de passe incorrect !'});
            }else{
            
                //console.log(user.dataValues);
                delete user.dataValues.password;
                console.log('Vous êtes connecté');
                //return res.status(201).json({msg :' Bon mot de passe'});
                return res.status(200).send({
                    msg: 'Logged in!',
                    "id" : user.uuid,
                    "token" : jwt.sign({
                        "id" : user.uuid,
                        "admin":user.isAdmin 
                    }
                    ,"SECRET_KEY",
                    { expiresIn : '24h'}
                    )
                    , user : user.dataValues
                });
                
            }//else 

        
        /*const comparepwd =  bcrypt.compare(password, user.password);
        console.log(comparepwd , "compare")
        if(!comparepwd){
            return res.status(401).json({msg :' Mot de passe incorrect !'});
        }else{
           
            //console.log(user.dataValues);
            delete user.dataValues.password;
            console.log('Vous êtes connecté');
            //return res.status(201).json({msg :' Bon mot de passe'});
            return res.status(200).send({
                msg: 'Logged in!',
                "id" : user.uuid,
                "token" : jwt.sign({
                    "id" : user.uuid,
                    "admin":user.isAdmin 
                }
                ,"SECRET_KEY",
                { expiresIn : '24h'}
                )
                , user : user.dataValues
            });
            
        }//else*/
    })
    .catch(function (error) {
        console.log(error);
        
      });
    

}//export
