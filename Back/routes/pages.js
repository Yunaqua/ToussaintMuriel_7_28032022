const express =require('express');
const router =express.Router();

router.get("/", (req,res) => {
	res.render("HomeView")
});

router.get("/register", (req,res) => {
	res.render("RegisterView")
});

router.get("/login", (req,res) => {
	res.render("LoginView")
});


module.exports = router;