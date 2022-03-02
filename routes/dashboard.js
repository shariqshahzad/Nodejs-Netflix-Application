const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController')
const { ensureAuthenticated } = require('../config/checkAuth')

//------------ Dashboard Route ------------//
router.get('/', ensureAuthenticated, dashboardController.dashboardHandle);

module.exports = router;