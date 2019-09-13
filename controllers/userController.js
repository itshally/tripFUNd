//dependency for this file
const db = require('../models');

//defining methods
module.exports = {
     createUser: (request, response) => {
          db.User
               .create(request.body)
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
