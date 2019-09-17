//dependency for this file
const db = require('../models');

//defining methods
module.exports = {
     addTrip: (request, response) => {

          // db.User
               // .findOne({'username' : request.body.username})
               // .then(response => {
                    db.Trips
                         .create({
                              'country': request.body.country,
                              'city': request.body.city,
                              'tripCost': request.body.tripCost,
                              'tripBudget': request.body.tripBudget
                         })
                         .then(dbTrip => response.json(dbTrip))
                         .catch(error => response.status(422).json(error));
               // })
               // .catch(error => response.status(422).json(error));
          
     },
     findAllTrips: (request, response) => {
          db.Trips
               .find({})
               .then(dbTrip => response.json(dbTrip))
               .catch(error => response.status(422).json(error));
     }
} 