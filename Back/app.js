require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const dbc  = require('./db/dbConnection');
const path = require('path');
const sequelize = require('sequelize');

const app =express();
/*
const db = mysql.createConnection({

	host     : 'localhost',
	user     : 'root',
	password : process.env.MYSQL_MDP,
	database : process.env.MYSQL_DATABASE
}) */

const db = new sequelize ( "db_master", "db_user", "password",  {
	host: 'localhost',
	password : process.env.MYSQL_MDP,
	dialect : 'mysql'

});

db.sync({});

module.export = db;


const publicDirectory = path.join(__dirname , '..\Front\Asset\Css');
app.use(express.static(publicDirectory));

//parse url encoded bodie
app.use(express.urlencoded({ extended :false})); //grab data from any form
//parse json bodies (as sent by API clients)
app.use(express.json());


app.use(express.static(__dirname));
//app.use(express.static(path.join(__dirname + '../Front/groupomania-project/src/views')))

app.set('views', path.join(__dirname, '../Front/groupomania-project/src/views'))
app.set('view engine', 'ejs');


/*
db.connect ( (error) => {
	if(error){
		console.log(error)
	}else {
		console.log("Mysl connection")
	}
})
 */
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // tous le monde à acces à l'api
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // accès a certaines requetes
	next();
  });

/*
const dbmodel = require("./models");
dbmodel.sequelize.sync();*/

//Les routes

app.use("/", require("./routes/pages"))
app.use("/auth", require("./routes/auth"))


module.exports = app;