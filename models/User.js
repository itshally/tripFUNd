//dependencies for this file
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//creating a collection for users
const UserSchema = new Schema({
    username : {
         type : String,
         unique : true,
         required : true,
         trim: true
    },
    password : {
         type : String,
         required : true,
         trim: true
    }
});

//plugin the passport-local-mongoose into the UserSchema
UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);

//exporting User model
module.exports = User;

