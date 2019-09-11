const router = require('express').Router();
const userController = require('../../controllers/userController');

//for login
router.route('/').post(userController.findAllUser);
module.exports = router;
