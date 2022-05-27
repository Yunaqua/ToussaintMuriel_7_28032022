'use strict';

module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    idUsers: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    
  }, {
    classMethods :{
      associate :function(models) {
        models.Message.belongsTo(models.User, {
          foreignKey:{//relation de la clé ne peut être null
            allowNull:false
          } 
        })
      }
    }
  });
  return Message;
};
