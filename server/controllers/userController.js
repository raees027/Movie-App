const { Users } = require("../Models/userModal");
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
  const refershToken = generateRefreshToken(user._id);

  res.cookie("refreshToken", refershToken, {
    httpOnly: true,
    secure: true,
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
      res.status(400).json({
        messaage: "Email Id/Phonenumber already exist",
      });
    }

    const hashedPassword = await generatePasswordHash(password);
    await Users.create({ emailidorphonenumber, password: hashedPassword });

    res.json({
      message: "Account has been created",
    });

    res.json(hashedPassword);
  } catch (error) {
    res.json({
      messaage: error.message,
    });
  }
};

const refreshToken = async (req, res) => {
  const userID = verifyRefershToken(req.cookie.refreshToken);
  if (!userID) {
    return res.status(401).json({
      message: "refresh token expired",
    });
  }

  const accessToken = generateAccessToken(userID);
  const refreshToken = generateRefreshToken(userID);

  res.cookie("refershToken", refreshToken, {
    httpOnly: true,
    secure: true,
  });

  res.json({ accessToken });
};

module.exports = { login, signup, refreshToken };
