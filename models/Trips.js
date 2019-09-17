//dependencies for this file
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating a collection for trips
const TripsSchema = new Schema({
//     username : {
//          type : String
//     },
    country: {
         type : String,
         required: true
    },
    city: {
         type: String,
         required: true
    },
    tripCost: {
         type: Number
    },
    tripBudget: {
         type: Number
    },
//     currentBudget: {
//          type: Number
//     }
});

const Trips = mongoose.model('Trips', TripsSchema);

//exporting User model
module.exports = Trips;

