const express =require('express');
const router =express.Router();

router.get("/", (req,res) => {
	//res.render("LoginView")
	console.log("in home");
});

router.get("/register", (req,res) => {
	//res.render("RegisterView")
	console.log("in register");
});

router.get("/login", (req,res) => {
	//res.render("LoginView")
	console.log("in login");
});


module.exports = router;