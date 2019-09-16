//dependencies for this file
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');
// const bcrypt = require('bcryptjs')
// mongoose.promise = Promise;

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

// UserSchema.methods = {
// 	checkPassword: (password) => {
// 		return bcrypt.compareSync(password, this.password)
// 	},
// 	hashPassword: password => {
// 		return bcrypt.hashSync(password, 10)
// 	}
// }

// UserSchema.pre('save', (next) => {
//      if (!this.password) {
// 		console.log('=======NO PASSWORD PROVIDED=======')
// 		next()
// 	} else {
// 		console.log('hashPassword in pre save');
// 		this.password = this.hashPassword(this.password)
// 		next()
// 	}
// });
//plugin the passport-local-mongoose into the UserSchema
// UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

//exporting User model
module.exports = User;

