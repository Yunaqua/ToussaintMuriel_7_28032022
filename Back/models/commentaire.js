'use strict';

module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Commentaire', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idMessage: {
      allowNull:false,
      DataTypes.INTEGER,
      references: {
        model: 'message', // <<< Note, its table's name, not object name
        key: 'id' // <<< Note, its a column name
      }
    },
    idUsers: {
      allowNull:false,
      DataTypes.INTEGER,
      references: {
        model: 'user', 
        key: 'id' 
      }
    },
    content: {
      allowNull:false,
      DataTypes.STRING
    },
    
  }, {
    classMethods :{
      associate :function(models) {
        models.Commentaire.belongsTo(models.Message, {
          foreignKey:{//relation de la clé ne peut être null
            allowNull:false
          } 
        })
      }
    }
  });
  return Commentaire;
};
