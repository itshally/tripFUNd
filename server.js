// -------------------------- Dependencies for this app -------------------------- //
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
const app = express();

// -------------------------- Define middleware here -------------------------- //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// add routes, both API and view
app.use(routes);


// connect to the Mongo DB
if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect("mongodb://localhost/tripfund", { useNewUrlParser: true });
};

// start the API serverd  
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


