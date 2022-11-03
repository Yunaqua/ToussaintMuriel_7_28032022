const express =require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const {authJwt} = require('../middleware');
//const multer = require('../middleware/multer-config');

router.get('/', userController.getAllUser);
router.get('/:id', userController.getOneUser);
router.put("/:id", userController.updateProfile);
//router.put("/:id", auth, multer, userController.updateProfile); authJwt.verifyToken,
router.delete('/:id',authJwt.verifyToken, userController.deleteProfile);
//router.delete('/:id',authJwt.isAdmin, userController.deleteAdminPro);
// https://thestartupcto.org/node-js-rest-apis-tutorial-with-express-sequelize-jwt-example-secure-rest-api-957d8d9894f8
//router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin],userController.updateProfile);


module.exports = router;