const path = require('path');

require('dotenv').config({ path: './config/.env' , encoding:'latin1' });


module.export = {
    'config ' : path.resolve('config' , 'config.js')   
}

module.export = {
    "development": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_MDP,
        "database": "database_development",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "test": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_MDP,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "production": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_MDP,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
}
