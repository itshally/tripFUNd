//dependencies for this file
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating a collection for users
const UserSchema = new Schema({
    username : {
         type : String,
         unique : true
    },
    password : {
         type : String
    }
});

const User = mongoose.model('User', UserSchema);

//exporting User model
module.exports = User;

