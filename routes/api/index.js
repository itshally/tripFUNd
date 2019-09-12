const router = require("express").Router();
const loginRoutes = require("./user");

router.use("/users", loginRoutes);

module.exports = router;
