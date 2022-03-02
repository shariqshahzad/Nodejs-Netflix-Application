const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')
const contentController = require('../controllers/contentController')

router.get('/', ensureAuthenticated, contentController.videoHandle);

module.exports = router;