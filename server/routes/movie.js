const express = require("express");
const router = express.Router();

const {
  getMovieList,
  getMovieListWithGenre,
  creatMovieList,
  updateMovieListWithGenre,
} = require("../controllers/movieController");

router.get("/", getMovieList);

router.get("/moviesWithGenre", getMovieListWithGenre);

router.post("/", creatMovieList);

//update movie with genre
router.put("/updateMovieWithGenre/:movieID", updateMovieListWithGenre);

module.exports = router;
