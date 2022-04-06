require('dotenv').config();
const mysql = require('mysql');
const bcrypt =require('bcryptjs');

const db = mysql.createConnection({

	host     : 'localhost',
	user     : 'root',
	password : process.env.MYSQL_MDP,
	database : process.env.MYSQL_DATABASE
})

exports.register = (req,res) => {
    console.log(req.body);
   

    const { name, email, password, passwordConfirm} = req.body;

    db.query("SELECT email FROM user WHERE email = ?" ,
        [email], async (error, results) => {//verifie qu'il n'y a pas d'autre utilisateur
        if(error) {
            console.log(error);
        }
        if( results.length > 0){// results est un tableau
            return res.render("register", { message :"Email already in use"})
        } else if( password !== passwordConfirm){
            return res.render("register", { message :"Passwords do not match"});
        }
            //-------- password crypt
        let hashedPassword = await bcrypt.hash(password,10);

        db.query("INSERT INTO user SET ?", 
            {name: name, email: email, password : hashedPassword}, (error, results) => {
                if(error) {
                    console.log(error);
                }else{
                    console.log(results);
                    return res.render("register", { message :"User created"});
      
                } 
            })//query insert


    }); //query

   
    
    }//export


 exports.login = (req,res) => {
    console.log(req.body);
    const { email, password, passwordConfirm} = req.body;
   
    db.query("SELECT email FROM user WHERE email = ?" ,
        [email], async (error, results)=> {
            if(error) {
                console.log(error);
            }if( results.length == 0){// results est un tableau
                return res.render("login", { message :"No email in the BDD"})
            } else if( password !== passwordConfirm){
                return res.render("login", { message :"Passwords do not match"});
            }
            
            db.query(`SELECT * FROM user WHERE email= ?`, 
            [email], async (error, results)=> {
                console.log(results);
                let hashedPassword = await bcrypt.hash(password,10);
                console.log(hashedPassword);
           
               const compare =  bcrypt.compare(hashedPassword, results[0].password)
                    if(!compare) {
                        console.log(error);
                    }else{
                        console.log("results");
                        //return res.render("login", { message :"User login"});
                        return res.render("gg");
                    }
                //bcrypt
            });//query
           
        /*
            db.query(`SELECT * FROM user WHERE email=${email} AND password = ${hashedPassword}`, 
            {email: email, password : hashedPassword}, (error, results) => {
                if(error) {
                    console.log(error);
                }else{
                    console.log(results);
                    return res.render("login", { message :"User login"});
      
                
            })//query insert } */

    });//query

}//export