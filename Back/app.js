require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
//const session = require('express-session');
const path = require('path');

const app =express();



const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : process.env.MYSQL_MDP,
	database : process.env.MYSQL_DATABASE
})

connection.connect( (error) =>{
	if(error){
		console.log(error)
	}else {
		console.log("Mysl connection")
	}
})


//app.use('/auth' ,require('./routes/auth'));


module.exports = app;