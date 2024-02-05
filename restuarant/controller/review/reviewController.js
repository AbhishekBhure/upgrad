const Review = require("../../models/review/reviewModal");

async function getAllReviews(req, res) {
  const allReviews = await Review.find({});
  res.json(allReviews);
}

async function getReviewsByRestaurant(req, res) {
  const restId = req.params.id;
  const getReviewsByRestaurant = await Review.find({ restId });
  res.status(200).json(getReviewsByRestaurant);
}

async function addReview(req, res) {
  const { restId, userId, rating, description } = req.body;
  try {
    let newReview = new Review({
      restId,
      userId,
      rating,
      description,
      date: new Date(),
    });

    await newReview.save().then((review) => {
      res.status(201).json({ message: "Review Added", review });
    });
  } catch (error) {
    return res.status(404).json(error);
  }
}

module.exports = { getAllReviews, addReview, getReviewsByRestaurant };
