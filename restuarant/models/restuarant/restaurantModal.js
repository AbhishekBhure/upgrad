const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  avgRating: {
    type: String,
    default: 0,
    minimum: 0,
    maximum: 5,
  },
  reviewCount: {
    type: Number,
    minimum: 0,
    maximum: 0,
  },
});

const Restaurant = mongoose.model("restaurant", RestaurantSchema);

module.exports = Restaurant;
