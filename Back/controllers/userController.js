//const {User, Post, Comment} = require('../models');
const {User} = require('../models');

module.exports.getAllUser = (req,res) => {
    User.findAll({
        include : "posts"
    })
    .then ( (User)) => {
        return res.status(200).send(User)
    }
    .catch( (error) => {
        res.status(500).json({error : "Pas d'utilisateur"})
    }) 
}


exports.updateProfile= (req,res) => {
    const nom = req.body.nom;

    models.User.findOne({
        attributes: ['id', 'nom'],
        where: { id: userId }
      }).then(function (userFound) {
        done(null, userFound);
      })
      .catch(function(err) {
        return res.status(500).json({ 'error': 'unable to verify user' });
      });

} //export