//dependency for this file
const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const config = require('config');
const jwt = require('jsonwebtoken');
//defining methods
module.exports = {
     // createUser: (request, response) => {
     //      var salt = bcrypt.genSaltSync(saltRounds);
     //      var hash = bcrypt.hashSync(request.body.password, salt);
     //      db.User
     //           .create({username: request.body.username, password: hash})
     //           .then(dbUser => response.json(dbUser))
     //           .catch(error => response.status(422).json(error));
     //      },
     // findAllUser: (request, response) => {
     //      db.User
     //           .find({})
     //           .then(dbUser => response.json(dbUser))
     //           .catch(error => response.status(422).json(error));
     //      },
     // findUser: (request, response) => {
     //      db.User
     //           .findOne({username:request.body.username})
     //           .then(dbUser => {(dbUser) ? response.json({msg: 'User already exist'}) : response.json({msg: 'User must exist'})} )
     //           .catch(error => response.status(422).json(error));
     // },
     // userAuthentication: (request, response) => {
     //      db.User
     //           .findOne({'username' : request.body.username, 'password' : request.body.password})
     //           .then(dbUser => response.json(dbUser))
     //           .catch(error => response.status(422).json(error));
     // }
     findUser: (request, response) => {
          db.User
               .findOne({username:request.body.username})
               .then(dbUser => {
                    if(dbUser) {
                        return response.json({msg: 'User already exist'})
                    } else{
                         var salt = bcrypt.genSaltSync(saltRounds);
                              var hash = bcrypt.hashSync(request.body.password, salt);
                              return db.User
                                   .create({username: request.body.username, password: hash})
                                   .then(dbUser => response.json(dbUser))
                                   .catch(error => response.status(422).json(error));
                              }
                    })
               .catch(error => response.status(422).json(error));
     },
     userAuthentication: (request, response) => {
          db.User
               .findOne({username:request.body.username, password: request.body.password})
               .then(dbUser => {
                    if(dbUser) {
                         return response.json(dbUser);
                     }
                    
                    // if(!dbUser) {
                    //      return response.status(400).json({ msg: 'User Does not exist' });
                    // }else{
                    //      if(!user) return res.status(400).json({ msg: 'User Does not exist' });
                         
                    //      return bcrypt.compare(request.body.password, dbUser.password)
                    //      .then(isMatch => {
                    //           if(!isMatch) {
                    //                return res.status(400).json({ msg: 'Invalid credentials' });
                    //           }else{
                    //                db.User.findById(request.user.id)
                    //                .select('-password')
                    //                .then(user => res.json(user));
                    //           }
                    // });
                    // }
                    
               })
               .catch(error => response.status(422).json(error));
     }
} 