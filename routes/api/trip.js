const router = require('express').Router();
const tripController = require('../../controllers/tripController');

router.route('/')
.post(tripController.addTrip)
.get(tripController.findAllTrips);

module.exports = router;
