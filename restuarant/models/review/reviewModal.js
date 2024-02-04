const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  resId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  rating: { type: Number, default: 0, minimum: 0, maximum: 5 },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Review = mongoose.model("review", ReviewSchema);

module.exports = Review;
