const express = require('express');
const router = express.Router();
const {home} = require('../controllers/auth-con');
router.route('/').get(home); //mapping the home route to the home function.

module.exports = router; //exporting the router for use in other files.

