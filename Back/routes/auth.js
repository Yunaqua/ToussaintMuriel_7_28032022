const express =require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
//router.put('/profile', authController.update);


module.exports = router;