
const Movie = require("../models/movie.js");

const movieController = {

    home: (req, res) => {
        res.render("home");
    },

    
    getMovies: async (req, res) => {
        let searchQuery = {};
        
    
        if (req.query.search) {
            searchQuery = { movieName: { $regex: req.query.search, $options: "i" } };
        }

        const allmovies = await Movie.find(searchQuery);
        
        res.render("movies", { allmovies, search: req.query.search || "" });
    },

    
    insertPage: (req, res) => {
        res.render("form");
    },


    createMovie: async (req, res) => {
        await Movie.create(req.body);
        res.redirect("/getdata");
    },

   
    editPage: async (req, res) => {
        const data = await Movie.findById(req.params.movieid);
        res.render("edit", { data });
    },

   
    updateMovie: async (req, res) => {
        await Movie.findByIdAndUpdate(req.params.movieid, req.body, {
            new: true
        });
        res.redirect("/getdata");
    },

    
    deleteMovie: async (req, res) => {
        await Movie.findByIdAndDelete(req.params.id);
        res.redirect("/getdata");
    }

};

module.exports = movieController;