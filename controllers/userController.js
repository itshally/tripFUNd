//dependency for this file
const db = require('../models');

//defining methods
module.exports = {
     createUser: (request, response) => {

          db.User
               .findOne({username: request.body.username, password: request.body.password})
               .then(dbUser => {
                    if(dbUser) {
                        return response.json({msg: 'User is already existing.'})
                    } else{
                         return db.User
                              .create({username: request.body.username, password: request.body.password})
                              .then(dbUser => response.json(dbUser))
                              .catch(error => response.status(422).json(error));
                         }
                    })
               .catch(error => response.status(422).json(error));
     },
     updateUser: (request, response) => {
          db.User.findOneAndUpdate({ '_id': request.body._id}, request.body)
          .then(dbUser => response.json(dbUser))
          .catch(error => response.status(422).json(error));
     },
     findUser: (request, response) => {
          db.User
               .find({})
               .then(dbUser => {response.json(dbUser)} )
               .catch(error => response.status(422).json(error));
     },
     userAuthentication: (request, response) => {
          db.User
               .findOne({'username' : request.body.username, 'password' : request.body.password})
               .then(dbUser => {
                    (dbUser) ? response.json(dbUser) : response.json({msg: `User doesn't exist.`});
               })
               .catch(error => response.status(422).json(error));
     }
} 