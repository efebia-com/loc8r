<<<<<<< HEAD
var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET homepage. */
router.get('/', ctrlMain.index);
=======
const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

router.get('/about', ctrlOthers.about);
>>>>>>> 33fc5bd6a9b1ed6a7cf15a9bfe302e0b85c77a67

module.exports = router;
