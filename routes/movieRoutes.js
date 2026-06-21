
const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController.js");


router.get("/", movieController.home);


router.get("/getdata", movieController.getMovies);


router.get("/insertdata", movieController.insertPage);


router.post("/createdata", movieController.createMovie);

router.get("/edit/:movieid", movieController.editPage);

router.post("/update/:movieid", movieController.updateMovie);

router.get("/delete/:id", movieController.deleteMovie);

module.exports = router;