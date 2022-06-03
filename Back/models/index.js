require('dotenv').config();
const path = require('path'); 
const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../db/dbconnection.js');
const mysql = require('mysql');
const env = process.env.NODE_ENV || "developpement" ;
const config = require(__dirname + '/../config/config.js')[env];
//console.log(__dirname + '/./config/config.js' , "env")
console.log(config ,"console");
const db = {};
 
const sequelize = new Sequelize(config.database, config.username, config.password ,
  config
  /*{
  host: dbConfig.host,
  user: "root",
  password: dbConfig.password,
  dialect: "mysql",
  operatorsAliases: false,//ovewrite all the errors
  pool: {
		max : 5,
		min: 0,
		acquire: 30000,
    idle: 10000
	} 
      
}*/
);
/*
sequelize.authenticate()
.then(() =>{
  console.log('connected');
})
.catch(err => {
  console.log('Error' +err);
}) 

const db = {} */
db.Sequelize =Sequelize; 
db.sequelize = sequelize;

//db.User = require("./user")(sequelize, Sequelize);
//db.tuto = require("./tuto.js")(sequelize, Sequelize); 

module.exports = db;