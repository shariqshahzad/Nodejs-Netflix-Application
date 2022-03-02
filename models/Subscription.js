const mongoose = require('mongoose');
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    description: String,
    type: String,
    rank: Number,
    subscribers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    movies: [{
        type: Schema.Types.ObjectId,
        ref: "Movie"
    }]
}, { collection: 'Subscriptions', timestamps: true });

module.exports = mongoose.model('Subscription', subscriptionSchema)