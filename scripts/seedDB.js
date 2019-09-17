const mongoose = require("mongoose");
const db = require("../models");

// This file empties the tripfund collection and inserts the users below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tripfund"
);

const userSeed = [
     {
          username: "admin",
          password: "admin"
     }
];   


db.User
  .find(userSeed)
  .then(data => {
    if(!data){ db.User.create(userSeed).then( () => process.exit() ); }
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
