const express =require('express');
const router =express.Router();

const userCtrl = require('../controllers/user');

router.post('/login', userCtrl.login);
router.post('/signup', userCtrl.signup);

router.get("/", (req,res,next) => {
	res.render("index.html")
});

router.get('/login', (req,res,next) => {
    res.render('login');
})

module.exports = router;