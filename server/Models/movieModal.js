const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 255,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },

    genre: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genres",
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Movies", moviesSchema);
