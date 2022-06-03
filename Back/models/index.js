require('dotenv').config();
const path = require('path'); 
const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../db/dbconnection.js');
const mysql = require('mysql');

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_MDP ,
{
  host: dbConfig.host,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_USER,
  dialect: "mysql",
  operatorsAliases: false,//ovewrite all the errors
  pool: {
		max : 5,
		min: 0,
		acquire: 30000,
    idle: 10000
	} 
      
}
);

sequelize.authenticate()
.then(() =>{
  console.log('connected');
})
.catch(err => {
  console.log('Error' +err);
}) 
const db = {} 
db.Sequelize =Sequelize; 
db.sequelize = sequelize;

db.User = require("./user")(sequelize, Sequelize);
//db.tuto = require("./tuto.js")(sequelize, Sequelize); 

module.exports = db;