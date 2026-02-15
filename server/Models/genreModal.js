const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 255,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Genres", genreSchema);
