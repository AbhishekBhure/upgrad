const express = require("express");
const passport = require("passport");
const {
  getAllUsers,
  signupUser,
} = require("../../controller/user/userController");

const router = express.Router();

router.get("/", getAllUsers).post("/sign-up", signupUser);

module.exports = router;
