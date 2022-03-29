const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const reMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regex = new RegExp(reMail);

  exports.register = (req, res, next) => {
      /*
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
          if((regex.test(req.body.email)) == true){
            const user = new User({
                nom: req.body.nom,
                prenom: req.body.prenom,
                sexe: req.body.sexe, 
                email: req.body.email,
                password: hash
            });
          user.save()
            .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
            .catch(error => res.status(400).json({ error }));
          }else{
            console.log("Ce n'est pas un email");
          }
          
      })
      .catch(error => res.status(500).json({ error }));*/
      console.log(req.body);
      res.send("Form");
  };
