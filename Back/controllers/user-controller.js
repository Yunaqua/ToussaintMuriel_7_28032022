const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dbc  = require('../db/dbConnection');
const { signupValidation } = require('./validation');
const { validationResult } = require('express-validator');
/*
const reMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regex = new RegExp(reMail);
*/
  exports.register = (req, res) => {
    console.log(req.body);
    res.send("Form");
  }; 


/*
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        if((regex.test(req.body.email)) == true){
            if (err) {
              return res.status(500).send({msg: err });
            } else {
              // has hashed pw => add to database
              const logquery = "INSERT INTO utilisateur SET?";
              const db = dbc.getDB();
              db.query(sql, user, (err, result) => {
                if (!result) {
                  res.status(200).json({ message: "Email déjà enregistré" });
                } else {
                  res.send(data);
                  res.status(201).json({ message: "User created !" });
                }
              });//query
            } 
          };
        })
        .catch(error => res.status(500).json({ error }));*/
