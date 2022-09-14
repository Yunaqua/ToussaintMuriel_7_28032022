const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './.env' });
const {User} = require('../models');

/*
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; //la partie du tableau qui contient l'authentification
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); //la clé doit correspondre à la fonction login
    const userId = decodedToken.userId;
    //req.auth = { userId };  //{ userId : userId};  raccourci js quand la clé et la variable ont le meme nom
    if (req.body.userId && req.body.userId !== userId) { //si le corps de la requete a un user.id, verifie que l'id correspond avec celui du token
      throw 'Invalid user ID';
    } else {
      next(); //le token est valable
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
*/

verifyToken = (req, res, next) => {
  let token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    console.log(token)
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
      console.log(req.userId , "id")
    
        if (user.isAdmin === true) {
          next();
          return;
        }
      
      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  
};


const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin
};

module.exports = authJwt;