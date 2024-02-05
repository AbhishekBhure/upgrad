const express = require("express");
const passport = require("passport");
const {
  getAllReviews,
  addReview,
  getReviewsByRestaurant,
} = require("../../controller/review/reviewController");

const router = express.Router();

router
  .get("/", getAllReviews)
  .post("/add-review", addReview)
  .get("/:id", getReviewsByRestaurant);

module.exports = router;
