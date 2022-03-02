const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')
const subscriptionController = require('../controllers/subscriptionController')

router.get('/manage-subscriptions', ensureAuthenticated, (req, res) => res.render('manage-subscriptions', {
    name: req.user.name,
    subscription: req.user.subscription && req.user.subscription.name
}));


router.get('/subscribe', ensureAuthenticated, subscriptionController.subscriptionHandle);

module.exports = router;