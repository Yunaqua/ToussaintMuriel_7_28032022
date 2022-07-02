const express =require('express');
const msgController = require('../controllers/msgController');
const router = express.Router();

router.post('/post', msgController.getAllMsg);
//router.post('/login', authController.login);


module.exports = router;