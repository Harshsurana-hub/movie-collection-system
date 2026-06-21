const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    movieName: String,
    director: String,
    genre: String,
    releaseYear: Number,
    rating: Number
});

module.exports = mongoose.model("Movie", movieSchema);