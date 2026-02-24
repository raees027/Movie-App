const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const app = express();
const cookiParser = require("cookie-parser");
const userRoute = require("../server/routes/user");
const movieRoute = require("../server/routes/movie");
const genreRoute = require("../server/routes/genre");
require("dotenv").config();

connectDb();

app.use(express.json());
app.use(cors());
app.use(cookiParser());

app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/genres", genreRoute);

PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`Server started running in ${PORT}`);
});
