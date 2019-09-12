const router = require('express').Router();
const userController = require('../../controllers/userController');

//able to display api
//http://localhost:3000/api/users
router.route('/').get(userController.findAllUser);

module.exports = router;
