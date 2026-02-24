const Genre = require("../Models/genreModal");

const getGenreList = async (req, res) => {
  try {
    const genrelist = await Genre.find();
    res.status(200).json(genrelist);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const createGenreList = async (req, res) => {
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
};

module.exports = { getGenreList, createGenreList };
