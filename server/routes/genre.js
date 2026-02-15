const express = require("express");
const router = express.Router();

const Genre = require("../Models/genreModal");

router.get("/", async (req, res) => {
  try {
    const genrelist = await Genre.find();
    res.status(200).json(genrelist);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const isExist = await Genre.findOne({ title: req.body.title });

    if (!isExist) {
      const genrelist = await Genre.create(req.body);
      return res.status(200).json(genrelist);
    }
    res.status(400).json({
      message: "Genre with this name already exist",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
