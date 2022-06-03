const express =require('express');
const authController = require('../controllers/messageController');
const router = express.Router();

/*
router.post('/post', messageController.createMessage);
router.post('/login', messageController.listMessages);




module.exports = router;
*/

module.exports = {
    createMessage: function(req, res){
        // Getting auth header
        var headerAuth  = req.headers['authorization'];
        var userId      = jwtUtils.getUserId(headerAuth);
    },
    listMessages: function(req, res){

    }
}