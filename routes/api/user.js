const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
.get(userController.findUser)
.post(userController.createUser)
.put(userController.updateUser);
// .get(userController.findAllUser);

router.route('/login')
.post(userController.userAuthentication);
// .get(userController.userAuthentication);

module.exports = router;
