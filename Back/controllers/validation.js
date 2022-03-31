const { check } = require('express-validator');
 
exports.signupValidation = [
    check('nom', 'Name is requied').not().isEmpty(),
    check('prenom', 'Name is requied').not().isEmpty(),
    check('sexe', 'Name is requied').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('mdp', 'Password must be 6 or more characters').isLength({ min: 6 })
]