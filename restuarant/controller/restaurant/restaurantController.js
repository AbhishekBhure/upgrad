const Restaurant = require("../../models/restuarant/restaurantModal");
const Review = require("../../models/review/reviewModal");

async function getAllRestaurants(req, res) {
  const allRest = await Restaurant.find({});
  res.status(200).json(allRest);
}

async function getSingleRestaurant(req, res) {
  const restId = req.params.id;
  const singleRest = await Restaurant.findById(restId);
  res.status(200).json(singleRest);
}

function addRestaurant(req, res) {
  try {
    const addRestaurant = new Restaurant({ name: req.body.name });
    if (addRestaurant.name.length === 0) {
      return res.json({ message: "Name Cannot be empty" });
    } else {
      addRestaurant.save().then((rest) => {
        res
          .status(201)
          .json({ message: "Restaurant Added Successfully:", rest });
      });
    }
  } catch (error) {
    return res.status(404).json(error);
  }
}

async function deleteRestaurant(req, res) {
  const restId = req.params.id;
  const rest = await Restaurant.findByIdAndDelete(restId);
  res
    .status(200)
    .json({ message: `Resturant deleted with ID: ${restId}`, rest });
}

module.exports = {
  getAllRestaurants,
  getSingleRestaurant,
  addRestaurant,
  deleteRestaurant,
};
