const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
.post(userController.findUser);
// .get(userController.findAllUser);


module.exports = router;
