const router = require("express").Router();
const loginRoutes = require("./user");

router.use("/login", loginRoutes);

module.exports = router;
