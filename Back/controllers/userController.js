//const {User, Post, Comment} = require('../models');
require('dotenv').config();
const mysql = require('mysql2');
let models = require('../models');
const path = require('path'); 

const {User} = require('../models');

const db = mysql.createConnection({

	host     : 'localhost',
	user     : process.env.MYSQL_USER,
	password : process.env.MYSQL_MDP,
	database : process.env.MYSQL_DATABASE
})

module.exports.getAllUser = (req,res) => {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
    .then ( (user) => {
        console.log(JSON.stringify(user, null, 2));
        console.log(user.length, ": nombre(s) d'utilisateur(s)");
        return res.status(200).send(user)
    })
    .catch( (error) => {
        res.status(500).json({error : "Pas d'utilisateur"})
    }) 
}

module.exports.getOneUser = (req,res) => {
  User.findOne({ where: { id: req.params.id }
  })
  .then ( (User) => {
      return res.status(200).send(User)
  })
  .catch( (error) => {
      res.status(500).json({error : "Pas d'utilisateur"});
  }) 
}

exports.updateProfile= (req,res) => {
    //const nom = req.body.nom;
   // console.log(req.body, "request ");
    User.findOne({ 
      where: { id: req.params.id }
    }).then((user) => {
      if(user.email!= null){

        User.findOne({ 
          where: { email: req.body.email }
        }).then((usermail)=>{
          if(!usermail){
            User.update(req.body, {
              where: { id: req.params.id }
              
            })
            
            return res.status(200).send(user)
          }else{
            res.status(401).json({error : "Email déja existant"});
          }
         
        })
      }
      
      
    }).catch( (error) => {
      res.status(500).json({error : "Pas d'utilisateur trouvé ou email déja existant"});
  }) 
} //export update

exports.deleteProfile= (req,res) => {

  console.log(req.params.id, "req")
  User.destroy({
    where: { id: req.params.id }
  })
  .then ( (User) => {
    res.status(204).send();
    console.log("Suppresion reussi")
})
.catch( (error) => {
    res.status(500).json({error : "Suppression refusé"});
}) 

}//del

exports.deleteAdminPro= (req,res) => {

  console.log(req.params.id, "req")
  User.destroy({
    where: { id: req.params.id }
  })
  .then ( (User) => {
    res.status(204).send();
    console.log("Suppresion reussi")
})
.catch( (error) => {
    res.status(500).json({error : "Suppression refusé"});
}) 

}//del