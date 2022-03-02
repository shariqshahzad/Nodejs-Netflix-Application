const Subscription = require('../models/Subscription');
const User = require('../models/User');


exports.subscriptionHandle = (req, res) => {
    const subscriptionName = req.query.name;
    Subscription.findOne({ name: req.query.name }).then(subscription => {
        User.findOne({ email: req.user.email }).then(user => {
            User.findByIdAndUpdate(
                { _id: user.id },
                { subscription },
                function (err, result) {
                    if (err) {
                        req.flash(
                            'error_msg',
                            'Error Subscribing !'
                        );
                        res.redirect(`/subscriptions/manage-subscriptions`);
                    } else {
                        res.redirect('/subscriptions/manage-subscriptions');
                    }
                })
        });
    })
}