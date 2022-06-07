'use strict';
//const {udv4 : uuidv4} = require('uuid');
const { v4: uuidv4 } = require('uuid');

module.exports = function(sequelize, DataTypes)  {
  var User = sequelize.define('User', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uuid: {
      allowNull:false,
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      isUUID : 4
    },
    email: {
      allowNull:false,
      type: DataTypes.STRING
    },
    nom: {
      allowNull:false,
      type: DataTypes.STRING
    },
    prenom: {
      allowNull:false,
      type: DataTypes.STRING
    },
    sexe: {
      allowNull:false,
      type: DataTypes.ENUM('Indefini','Homme','Femme')
    },
    age: {
      allowNull:false,
      type: DataTypes.INTEGER
    },
    password: {
      allowNull:false,
      type: DataTypes.STRING
    },
    isAdmin: {
      allowNull:false,
      type: DataTypes.BOOLEAN,
      defaultValue : 0
    }
    
  }, {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
  },{
    classMethods :{
      associate :function(models) {
        models.User.hasMany(models.Message);
      }
    }
  });
  return User;
};

