const Movie = require('../models/Movie');


exports.dashboardHandle = (req, res) => {
    const subscriptionName = req.query.name;
    Movie.find({}, (err, docs) => {
        const filteredMovies = docs.filter(element => {
            return element.subscriptions.filter(sub => {
                if (!req.user.subscription)
                    return false;
                return sub.rank >= req.user.subscription.rank
            }).length > 0;
        });
        res.render('dash', {
            name: req.user.name,
            movies: JSON.parse(JSON.stringify(filteredMovies)),
            subscription: req.user.subscription && req.user.subscription.name
        })
    }).populate("subscriptions");
}