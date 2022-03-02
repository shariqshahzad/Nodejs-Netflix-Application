
const Movie = require('../models/Movie');
const Subscription = require('../models/Subscription');

exports.initialize = () => {
    const basicSubPromise = new Promise((resolve, reject) => {
        Subscription.find({
            rank: 1,
        }, (err, subscriptions) => {
            if (!subscriptions.length > 0) {
                const subscription = new Subscription({
                    "name": "basic",
                    "description": "the most basic subscription type alotted at time of registration",
                    "rank": 3
                }).save().then(user => {
                    resolve("added")
                })
                    .catch(err => reject(err));
            }
        });
    })
    const premiumSubPromise = new Promise((resolve, reject) => {
        Subscription.find({
            rank: 2,
        }, (err, subscriptions) => {
            if (!subscriptions.length > 0) {
                const subscription = new Subscription({
                    "name": "premium",
                    "description": "the premium subscription contains more content than basic",
                    "rank": 2
                }).save().then(user => {
                    resolve("added")
                })
                    .catch(err => reject(err));
            }
        });
    })
    const proSubPromise = new Promise((resolve, reject) => {
        Subscription.find({
            rank: 3,
        }, (err, subscriptions) => {
            if (!subscriptions.length > 0) {
                const subscription = new Subscription({
                    "name": "pro",
                    "description": "pro contains more content than the basic and premium",
                    "rank": 1
                }).save().then(user => {
                    resolve("added")
                })
                    .catch(err => reject(err));
            }
        })
    })

    Promise.all([basicSubPromise, premiumSubPromise, proSubPromise]).then((values) => {
        console.log(values);
        Movie.find({
            name: 'Bright',
        }, (err, movies) => {
            if (!movies.length > 0) {
                Subscription.find({
                    rank: { $gt: 0, $lt: 4 },
                }, (err, subscriptions) => {
                    const movie = new Movie({
                        "name": "Bright",
                        "description": "Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.",
                        "genre": "Action, Crime, Fantasy",
                        "releaseYear": "2017",
                        "fileName": "Bright _ Official Trailer _ Netflix",
                        "director": "David Ayer",
                        "duration": "117 min",
                        "cover": "https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg",
                        "tile": "https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg",
                        subscriptions
                    }).save()
                        .then(user => {
                            console.log("added")
                        })
                        .catch(err => console.log(err));
                });
            }
        });
        Movie.find({
            name: 'Black Panther',
        }, (err, movies) => {
            if (!movies.length > 0) {
                Subscription.find({
                    rank: { $gt: 0, $lt: 3 },
                }, (err, subscriptions) => {
                    const movie = new Movie({
                        "name": "Black Panther",
                        "description": "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
                        "genre": "Action, Adventure, Sci-Fi",
                        "releaseYear": "2018",
                        "fileName": "Marvel Studios' Black Panther - Official Trailer",
                        "director": "Ryan Coogler",
                        "duration": "134 min",
                        "cover": "https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg",
                        "tile": "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
                        subscriptions
                    }).save()
                        .then(user => {
                            console.log("added")
                        })
                        .catch(err => console.log(err));
                });
            }
        });
        Movie.find({
            name: 'Tomb Raider',
        }, (err, movies) => {
            if (!movies.length > 0) {
                Subscription.find({
                    rank: { $gt: 0, $lt: 2 },
                }, (err, subscriptions) => {
                    const movie = new Movie({
                        "name": "Tomb Raider",
                        "description": "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
                        "genre": "Action, Fantasy",
                        "releaseYear": "2018",
                        "fileName": "TOMB RAIDER - Official Trailer",
                        "director": "Roar Uthaug",
                        "duration": "125 min",
                        "cover": "https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png",
                        "tile": "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
                        subscriptions
                    }).save()
                        .then(user => {
                            console.log("added")
                        })
                        .catch(err => console.log(err));
                });
            }
        });
        Movie.find({
            name: 'Super 30',
        }, (err, movies) => {
            if (!movies.length > 0) {
                Subscription.find({
                    rank: { $gt: 0, $lt: 2 },
                }, (err, subscriptions) => {
                    const movie = new Movie({
                        "name": "Super 30",
                        "description": "Based on the life of Patna-based mathematician Anand Kumar who runs the famed Super 30 program for IIT aspirants in Patna.",
                        "genre": "Biography, Drama",
                        "releaseYear": "2019",
                        "fileName": "Super 30 _ Official Trailer",
                        "director": "Vikas Bahl",
                        "duration": "154 min",
                        "cover": "https://bollyworm.com/wp-content/uploads/2018/09/Super-30-1-1000x600.jpg",
                        "tile": "https://upload.wikimedia.org/wikipedia/en/2/29/Super_30_The_Film.jpg",
                        subscriptions
                    }).save()
                        .then(user => {
                            console.log("added")
                        })
                        .catch(err => console.log(err));
                });
            }
        });
    });
};
