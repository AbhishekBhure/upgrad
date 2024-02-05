const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user/userModal");

const jwtExpire = 24 * 60 * 60;

function getAllUsers(req, res) {
  res.json({ mesage: "All user" });
}

function signupUser(req, res) {
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email Already Exists!!" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.hash(newUser.password, 10, function (err, hash) {
        if (err) console.log(`Something went wrong: ${err}`);
        else {
          newUser.password = hash;
          newUser.save().then((user) => {
            return res.status(201).json(user);
          });
        }
      });
    }
  });
}

function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  try {
    User.findOne({ email }).then((user) => {
      if (!user) {
        return res.status(404).json({ message: "Invalid Credentials!!" });
      }

      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: user.id,
            name: user.name,
          };

          jwt.sign(
            payload,
            process.env.JWT_SECRETE,
            { expiresIn: jwtExpire },
            (err, token) => {
              if (err) console.log(`Something went wrong in JWT: ${err}`);
              else {
                res.status(200).json({
                  success: true,
                  token: token,
                });
              }
            }
          );
        } else {
          return res.status(400).json({ message: "Invalid Credentials!!" });
        }
      });
    });
  } catch (error) {
    return res.status(400).json({ message: `Invalid Credentials: ${error}` });
  }
}

module.exports = { getAllUsers, signupUser, login };
