const express = require("express");
const passport = require("passport");
const {
  getAllUsers,
  signupUser,
  login,
} = require("../../controller/user/userController");

const router = express.Router();

router.get("/", getAllUsers).post("/sign-up", signupUser).post("/login", login);

module.exports = router;
