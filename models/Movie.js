const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    description: String,
    genre: String,
    releaseYear: String,
    director: String,
    duration: String,
    fileName : String,
    cover: String,
    tile: String,
    subscriptions: [{
        type: Schema.Types.ObjectId,
        ref: "Subscription"
    }]
}, { collection: 'Movies', timestamps: true });

module.exports = mongoose.model('Movie', movieSchema)