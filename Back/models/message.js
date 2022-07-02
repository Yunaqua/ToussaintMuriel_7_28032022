'use strict';

module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idUser: {
      allowNull:false,
      DataTypes.INTEGER,
      references: {
        model: 'user',  // <<< Note, its table's name, not object name
        key: 'id' // <<< Note, its a column name
      }
    },
    content: {
      allowNull:false,
      DataTypes.STRING
    },
    commentaires  : { 
      type : SEQUELIZE.ARRAY(SEQUELIZE.STRING), defaultValue: null
    },
    
  }, {
    classMethods :{
      associate :function(models) {
        models.Message.hasMany(models.Commentaire);
        models.Message.belongsTo(models.User, {
          foreignKey:{  //   relation de la clé ne peut être null
            allowNull:false
          } 
        })
      }
    }
  });
  return Message;
};
