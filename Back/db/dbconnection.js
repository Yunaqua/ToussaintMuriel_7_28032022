require('dotenv').config();
const mysql = require('mysql');
const path = require('path');

var db = mysql.createConnection({
    host     : 'localhost',
	user     : 'root',
	password : process.env.MYSQL_MDP,
	database : process.env.MYSQL_DATABASE
});
db.connect(function(err) {
	if (err) throw err;
	console.log('Database is connected successfully !');
  });

module.exports = db;
/*
module.exports.getDB = () => {
	return db
}*/