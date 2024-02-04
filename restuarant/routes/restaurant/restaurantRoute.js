const express = require("express");
const passport = require("passport");
const {
  getAllRestaurants,
} = require("../../controller/restaurant/restaurantController");

const router = express.Router();

router.get("/", getAllRestaurants);

module.exports = router;
