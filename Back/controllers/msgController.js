const {Message} = require('../models');

module.exports.getAllMsg = (req,res) => {
    Message.findAll({
        include : "posts"
    })
    .then ( (Message) => {
        return res.status(200).send(Message)
    })
    .catch( (error) => {
        res.status(500).json({error : "Pas d'utilisateur"})
    }) 
}