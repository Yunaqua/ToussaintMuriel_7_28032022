require('dotenv').config();
const mysql = require('mysql2');
const path = require('path'); 

var db = mysql.createConnection({
    host     : 'localhost',
	user     : process.env.MYSQL_USER,
	password : process.env.MYSQL_MDP,
	database : process.env.MYSQL_DATABASE,
	dialect : "mysql",
   	port: 3306,
	pool: {
		max : 5,
		min: 0,
		acquire: 30000,
    	idle: 10000
	}
});
db.connect(function(err) {
	if (err) throw err;
	console.log('Database is connected successfully !');
  });

module.exports = db;
