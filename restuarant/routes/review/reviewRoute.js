const express = require("express");
const passport = require("passport");
const { getReviews } = require("../../controller/review/reviewController");

const router = express.Router();

router.get("/", getReviews);

module.exports = router;
