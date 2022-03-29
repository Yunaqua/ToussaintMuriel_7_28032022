require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
//const session = require('express-session');
const path = require('path');

const app =express();
app.use(express.json()); //intercerpte les requetes de type json et donne accès au corps de la req
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : process.env.MYSQL_MDP,
	database : process.env.MYSQL_DATABASE
})

app.listen(5001, () => {
	console.log("server port 5001")
})
connection.connect( (error) =>{
	if(error){
		console.log(error)
	}else {
		console.log("Mysl connection")
	}
})

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // tous le monde à acces à l'api
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // accès a certaines requetes
	next();
  });

app.use('/', require('./routes/pages'));
app.use('/auth', authRoutes);



module.exports = app;