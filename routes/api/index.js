const router = require("express").Router();
const userDataRoutes = require("./user");
const tripDataRoutes = require('./trip');

router.use("/user", userDataRoutes);

router.use('/trip', tripDataRoutes);

module.exports = router;
