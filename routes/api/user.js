const router = require('express').Router();
const userController = require('../../controllers/userController');

//able to display api
//http://localhost:3000/api/users
router.route('/')
.get(userController.findAllUser)
.post(userController.createUser);

router.route('/login').post(userController.userAuthentication);

module.exports = router;
