const express =require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config');

router.get('/', userController.getAllUser);
router.get('/:id', userController.getOneUser);
router.put("/:id", userController.updateProfile);
//router.put("/:id", auth, multer, userController.updateProfile);
//router.delete('/:id',auth, userController.deleteProfile);


module.exports = router;