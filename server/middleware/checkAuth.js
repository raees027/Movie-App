const jwt = require("jsonwebtoken");
exports.checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "Access Denied!!!!",
      });
    }

    const tokenValid = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = tokenValid._id;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
};
