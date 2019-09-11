const router = require('express').Router();
const userController = require('../../controllers/userController');

//for login
router.route('/login').post(userController.createNewUser);

