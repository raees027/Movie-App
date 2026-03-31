const Users = require("../Models/userModal");
const {
  comparePasswordHash,
  generatePasswordHash,
} = require("../utils/bcrypt");
const {
  verifyRefershToken,
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/jwt");

const login = async (req, res) => {
  const { emailidorphonenumber, password } = req.body;

  const user = await Users.findOne({ emailidorphonenumber });
  if (!user) {
    return res.status(400).json({
      message: "Email Id/Password is not valid",
    });
  }

  const validPassword = await comparePasswordHash(password, user.password);

  if (!validPassword) {
    return res.status(400).json({
      message: "Email Id/Password is not valid.",
    });
  }

  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });

  res.json({
    _id: user._id,
    emailidorphonenumber: user.emailidorphonenumber,
    accessToken,
  });
};

const signup = async (req, res) => {
  try {
    const { emailidorphonenumber, password } = req.body;

    const isExist = await Users.findOne({ emailidorphonenumber });

    if (isExist) {
      return res.status(400).json({
        message: "Email Id/Phonenumber already exist",
      });
    }

    const hashedPassword = await generatePasswordHash(password);
    await Users.create({ emailidorphonenumber, password: hashedPassword });

    res.json({
      message: "Account has been created",
    });

    // res.json(hashedPassword);
  } catch (error) {
    res.json({
      messaage: error.message,
    });
  }
};

const refreshToken = async (req, res) => {
  const userID = verifyRefershToken(req.cookies.refreshToken);
  if (!userID) {
    return res.status(401).json({
      message: "refresh token expired",
    });
  }

  const accessToken = generateAccessToken(userID);
  const refreshToken = generateRefreshToken(userID);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });

  res.json({ accessToken });
};

const profile = async (req, res) => {
  const user = await Users.findById(req.userId).select("-password");
  res.json(user);
};

const getWatchListMovies = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await Users.findById(userId).populate({
      path: "movies",
      model: "Movies",
      populate: {
        path: "genre",
        model: "Genres",
      },
    });

    if (!userId) {
      res.status(404).json({
        message: "User not found",
      });
    }
    res.json(user.movies);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { login, signup, refreshToken, profile, getWatchListMovies };
