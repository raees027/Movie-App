const jwt = require("jsonwebtoken");

const generateAccessToken = (userID) => {
  return jwt.sign({ _id: userID }, process.env.ACCESS_TOKEN_SECRET);
};

const generateRefreshToken = (userID) => {
  return jwt.sign({ _id: userID }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1y",
  });
};

const verifyRefershToken = (refreshToken) => {
  if (!refreshToken) return false;

  const tokenValid = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  if (!tokenValid) return false;

  return tokenValid._id;
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyRefershToken,
};
