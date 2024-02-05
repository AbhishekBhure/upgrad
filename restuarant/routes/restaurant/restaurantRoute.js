const express = require("express");
const passport = require("passport");
const {
  getAllRestaurants,
  addRestaurant,
  getSingleRestaurant,
  deleteRestaurant,
} = require("../../controller/restaurant/restaurantController");

const router = express.Router();

router
  .get("/", getAllRestaurants)
  .post("/add-rest", addRestaurant)
  .get("/:id", getSingleRestaurant)
  .delete("/:id", deleteRestaurant);

module.exports = router;
