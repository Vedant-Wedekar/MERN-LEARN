const express = require('express');
const router = express.Router();
const {home,profile} = require('../controllers/auth-con');

router.route('/').get(home); //mapping the home route to the home function.
router.route('/profile').post(profile); //mapping the profile route to the profile function.
module.exports = router; //exporting the router for use in other files.



