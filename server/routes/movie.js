const express = require("express");
const router = express.Router();

const {
  getMovieList,
  getMovieListWithGenre,
  creatMovieList,
  updateMovieListWithGenre,
  getMoviePoster,
  upload,
} = require("../controllers/movieController");

router.get("/", getMovieList);

router.get("/moviesWithGenre", getMovieListWithGenre);

router.get("/moviePoster", getMoviePoster);

router.post("/", upload.single("moviePoster"), creatMovieList);

//update movie with genre
router.put("/updateMovieWithGenre/:movieID", updateMovieListWithGenre);

module.exports = router;
