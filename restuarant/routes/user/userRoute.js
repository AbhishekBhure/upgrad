const express = require("express");
const passport = require("passport");
const {
  default: getAllUsers,
} = require("../../controller/user/userController");

const router = express.Router();

router.get("/users", getAllUsers);

module.exports = router;
