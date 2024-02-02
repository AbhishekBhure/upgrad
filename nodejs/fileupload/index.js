const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/uploads");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: fileFilter,
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/fileupload", upload.single("photo"), function (req, res, callback) {
  const fileName = req.file.filename;
  res.json({
    message: "Successfully upldoaded!",
    filename: fileName,
  });
});

app.listen(3000, () => {
  console.log(`Server Listening at PORT:3000`);
});
