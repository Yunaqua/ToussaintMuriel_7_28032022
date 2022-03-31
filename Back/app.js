require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const dbc  = require('./db/dbConnection');
const path = require('path');

const app =express();
app.use(express.json()); //intercerpte les requetes de type json et donne accès au corps de la req
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');

app.listen(5001, () => {
	console.log("server port 5001")
})
dbc.connect( (error) =>{
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

//app.use('/', require('./routes/pages'));
//app.use('/auth', authRoutes);
app.post('/auth/register', function(request, response) {
	console.log(req.body);
});


module.exports = app;