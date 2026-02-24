const express = require("express");
const router = express.Router();

const Genre = require("../Models/genreModal");
const {
  getGenreList,
  createGenreList,
} = require("../controllers/genreController");

router.get("/", getGenreList);

router.post("/", createGenreList);

module.exports = router;
