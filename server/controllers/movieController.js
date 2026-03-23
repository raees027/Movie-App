const Movie = require("../Models/movieModal");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

const upload = multer({ storage: storage });

const getMoviePoster = (req, res) => {
  const imagesFolder = path.join(__dirname, "public/images");

  fs.readdir(imagesFolder, (err, files) => {
    if (err) {
      console.error("Error reading folder:", err);
      return res.status(500).json({ error: "Unable to read images folder" });
    }

    const imageFiles = files.filter((file) => {
      return (
        file.endsWith(".png") ||
        file.endsWith(".jpg") ||
        file.endsWith(".jpeg") ||
        file.endsWith(".webp") ||
        file.endsWith(".gif")
      );
    });

    res.json(imageFiles);
  });
};

const getMovieList = async (req, res) => {
  try {
    const movielist = await Movie.find();
    res.status(200).json(movielist);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// const getMovieListWithGenre = async (req, res) => {
//   try {
//     const movielist = await Movie.find().populate("genre");
//     res.status(200).json(movielist);
//   } catch (error) {
//     res.status(400).json({
//       message: error.message,
//     });
//   }
// };

const getMovieListWithGenre = async (req, res) => {
  try {
    const { query } = req.query;

    let filter = {};

    if (query) {
      filter.title = { $regex: query, $options: "i" };
    }

    const movies = await Movie.find(filter).populate("genre");

    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const creatMovieList = async (req, res) => {
  try {
    const { title, rating } = req.body;
    const isExist = await Movie.findOne({ title: title });
    const genre = req.body.genres ? JSON.parse(req.body.genres) : [];
    const image = req.file ? req.file.filename : null;

    if (!isExist) {
      const movielist = await Movie.create({
        title,
        rating,
        genre,
        image,
      });
      return res.status(201).json(movielist);
    }
    res.status(400).json({
      message: "Movie with this name already exist",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const updateMovieListWithGenre = async (req, res) => {
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
};
module.exports = {
  getMovieList,
  getMovieListWithGenre,
  creatMovieList,
  getMoviePoster,
  updateMovieListWithGenre,
  upload,
};
