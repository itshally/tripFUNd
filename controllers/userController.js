//dependency for this file
const db = require('../models');

//defining methods
module.exports = {
     createNewUser: (request, response) => {
          db.User
               .create(
                     {username: request.body.username},
                     {password: request.body.password})
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
               .then()
               .catch(error => response.status(422).json(error));
     }
} 
