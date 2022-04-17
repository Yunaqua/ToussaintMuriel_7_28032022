require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const dbc  = require('./db/dbConnection');
const path = require('path');

const app =express();

const db = mysql.createConnection({

	host     : 'localhost',
	user     : 'root',
	password : process.env.MYSQL_MDP,
	database : process.env.MYSQL_DATABASE
})

const publicDirectory = path.join(__dirname , '..\Front\Asset\Css');
app.use(express.static(publicDirectory));

//parse url encoded bodie
app.use(express.urlencoded({ extended :false})); //grab data from any form
//parse json bodies (as sent by API clients)
app.use(express.json());

app.set('views', path.join(__dirname, '../Front/my-first-vue-cli-app/src/views'))
app.set('view engine', 'ejs');

db.connect ( (error) => {
	if(error){
		console.log(error)
	}else {
		console.log("Mysl connection")
	}
})

//Les routes

app.use("/", require("./routes/pages"))
app.use("/auth", require("./routes/auth"))

app.listen(5001, () => {
	console.log("Server on port 5001");
});


module.exports = app;