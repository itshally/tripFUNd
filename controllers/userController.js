//dependency for this file
const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//defining methods
module.exports = {
     createUser: (request, response) => {
          var salt = bcrypt.genSaltSync(saltRounds);
          var hash = bcrypt.hashSync(request.body.password, salt);
          db.User
               .create({username: request.body.username, password: hash})
               .then(dbUser => response.json(dbUser))
               .catch(error => response.status(422).json(error));
          },
     findAllUser: (request, response) => {
          db.User
               .find({})
               .then(dbUser => response.json(dbUser))
               .catch(error => response.status(422).json(error));
          },
     findUser: (request, response) => {
          db.User
               .findOne({_id: request.params.id})
               .then(dbUser => response.json(dbUser))
               .catch(error => response.status(422).json(error));
     },
     userAuthentication: (request, response) => {
          db.User
               .find({'username' : request.body.username})
               .then(dbUser => response.json(dbUser))
               .catch(error => response.status(422).json(error));
     }
} 
