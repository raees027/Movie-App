const express = require("express");
const router = express.Router();

const {
  getGenreList,
  createGenreList,
} = require("../controllers/genreController");

router.get("/", getGenreList);

router.post("/", createGenreList);

module.exports = router;
