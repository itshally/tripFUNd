//dependency for this file
const db = require('../models');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const config = require('config');
// const jwt = require('jsonwebtoken');
// const LocalStrategy = require('passport-local').Strategy;

//defining methods
module.exports = {
     createUser: (request, response) => {
          // var salt = bcrypt.genSaltSync(saltRounds);
          // var hash = bcrypt.hashSync(request.body.password, salt);
          // db.User
          //      .create({username: request.body.username, password: request.body.password})
          //      .then(dbUser => response.json(dbUser))
          //      .catch(error => response.status(422).json(error));

          db.User
               .findOne({username: request.body.username, password: request.body.password})
               .then(dbUser => {
                    if(dbUser) {
                        return response.json({msg: 'User is already existing.'})
                    } else{
                         // var salt = bcrypt.genSaltSync(saltRounds);
                         //      var hash = bcrypt.hashSync(request.body.password, salt);
                         return db.User
                              .create({username: request.body.username, password: request.body.password})
                              .then(dbUser => response.json(dbUser))
                              .catch(error => response.status(422).json(error));
                         }
                    })
               .catch(error => response.status(422).json(error));
     },
     // findAllUser: (request, response) => {
     //      db.User
     //           .find({})
     //           .then(dbUser => response.json(dbUser))
     //           .catch(error => response.status(422).json(error));
     //      },
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