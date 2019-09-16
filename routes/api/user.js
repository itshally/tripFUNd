const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
.get(userController.findUser)
.post(userController.createUser);
// .get(userController.findAllUser);

router.route('/login')
.post(userController.userAuthentication);

module.exports = router;
