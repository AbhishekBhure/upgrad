const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyPaser = require("body-parser");
const passport = require("passport");
const user = require("./routes/user/userRoute.js");
const restaurant = require("./routes/restaurant/restaurantRoute.js");
const review = require("./routes/review/reviewRoute.js");

mongoose.connect(process.env.MONGO_ATLAS_URI).then(
  () => {
    console.log("Conneted To DB");
  },
  (err) => {
    console.log(`Something went wrong ${err}`);
  }
);

const app = express();
const PORT = 3000;

app.use(passport.initialize());
app.use(bodyPaser.urlencoded({ extended: true }));
app.use(bodyPaser.json());

app.use("/api/users", user);
app.use("/api/restaurants", restaurant);
app.use("/api/reviews", review);

app.get("/", (req, res) => {
  res.json({ message: "All good" });
});

app.listen(PORT, () => {
  console.log(`Server listening at PORT: ${PORT}`);
});
