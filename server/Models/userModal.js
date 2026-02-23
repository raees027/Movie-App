const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    emailidorphonenumber: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: Number,
      required: true,
    },
    // gender: {
    //   type: String,
    //   lowercase: true,
    //   enum: ["male", "female", "not want to disclose"],
    //   required: true,
    // },

    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movies",
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Users", userSchema);
