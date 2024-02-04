const express = require("express");
const passport = require("passport");
const {
  default: getAllRestaurants,
} = require("../../controller/restaurant/restaurantController");

const router = express.Router();

router.get("/restaurant", getAllRestaurants);

module.exports = router;
