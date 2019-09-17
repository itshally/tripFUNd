const router = require("express").Router();
const userDataRoutes = require("./user");

router.use("/user", userDataRoutes);

module.exports = router;
