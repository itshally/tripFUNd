const router = require("express").Router();
const userDataRoutes = require("./user");

router.use("/users", userDataRoutes);

module.exports = router;
