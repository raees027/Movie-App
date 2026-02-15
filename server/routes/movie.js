const express = require("express");
const router = express.Router();

const Movie = require("../Models/movieModal");

router.get("/", async (req, res) => {
  try {
    const movielist = await Movie.find();
    res.status(200).json(movielist);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.get("/moviesWithGenre", async (req, res) => {
  try {
    const movielist = await Movie.find().populate("genre");
    res.status(200).json(movielist);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const isExist = await Movie.findOne({ title: req.body.title });

    if (!isExist) {
      const movielist = await Movie.create(req.body);
      return res.status(200).json(movielist);
    }
    res.status(400).json({
      message: "Movie with this name already exist",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

//update movie with genre
router.put("/updateMovieWithGenre/:movieID", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.movieID,
      {
        $push: {
          genre: req.body.genreID,
        },
      },
      { new: true },
    );

    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
