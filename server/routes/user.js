const express = require("express");
const router = express.Router();

const User = require("../Models/userModal");
const {
  login,
  signup,
  refreshToken,
} = require("../controllers/userController");
const { checkAuth } = require("../middleware/checkAuth");

router.get("/", async (req, res) => {
  try {
    const userlist = await User.find().select("name age gender movie");
    res.status(200).json(userlist);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

//watchList
router.get("/watchList/:userID", checkAuth, async (req, res) => {
  try {
    const watchList = await User.findById(req.params.userID)
      .select("name age gender movies")
      .populate({
        path: "movies",
        populate: {
          path: "genre",
        },
      });
    res.status(200).json(watchList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
// router.post("/", async (req, res) => {
//   try {
//     const isExist = await User.findOne({ name: req.body.name });

//     if (!isExist) {
//       const userlist = await User.create(req.body);
//       return res.status(200).json(userlist);
//     }
//     res.status(400).json({
//       message: "User with this name already exist",
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: error.message,
//     });
//   }
// });

//updating user with movies waitchlater
router.put("/watchlater/:userID", async (req, res) => {
  try {
    const updatedUserList = await User.findByIdAndUpdate(
      req.params.userID,
      {
        $push: {
          movies: req.body.movieID,
        },
      },
      { new: true },
    );

    res.status(200).json(updatedUserList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.post("/login", login);
router.post("/signup", signup);
router.get("/refresh-token", refreshToken);

module.exports = router;
