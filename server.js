// -------------------------- Dependencies for this app -------------------------- //
const express = require('express');
const mongoose = require('mongoose');
const LocalStrategy   = require('passport-local');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const routes = require('./routes');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();


// -------------------------- Define middleware here -------------------------- //
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}



// add routes, both API and view
app.use('/', routes);

// a special area of the session used for storing messages
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// -------------------------- Configure Passport/Possport-Local -------------------------- //
// requires the model with Passport-Local Mongoose plugged in
const User = require('./models/User');

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tripfund');

// start the API serverd  
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


