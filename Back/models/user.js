'use strict';

module.exports = function(sequelize, DataTypes)  {
  var User = sequelize.define('User', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
      allowNull:true,
      type: DataTypes.BOOLEAN
    }
    
  }, {
    classMethods :{
      associate :function(models) {
        models.User.hasMany(models.Message);
      }
    }
  });
  return User;
};

