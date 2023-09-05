const express = require('express');
const fs = require('fs');
const cors = require('cors');
const { join, basename } = require('path');
const BusBoy = require('busboy');

const app = express();
app.use(cors());

app.get('/api/list', function (req, res) {
  try {
    let files = fs.readdirSync(join(__dirname, 'uploads'));
    files = files.map((file) => {
      return {
        file,
        size: Math.ceil(fs.statSync(join(__dirname, 'uploads', file))['size'] / 1024),
      };
    });
    res.json(files);
  } catch {
    res.json({ status: 500, error: 'There was an error reading the /uploads directory on the server' });
  }
});

app.post('/api/upload', function (req, res) {
  let fname = '';
  let mime = '';
  try {
    let busboy = new BusBoy({ headers: req.headers });

    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
      fname = filename;
      mime = mimetype;
      savePath = join(__dirname, 'uploads', basename(filename));
      file.pipe(fs.createWriteStream(savePath));
    });

    busboy.on('finish', function () {
      console.log(`${fname} was successfully uploaded!`);
      res.json({ status: 200, file: fname, type: mime });
    });

    busboy.on('error', function () {
      req.unpipe(busboy);
    });

    req.pipe(busboy);
  } catch {
    res.json({ status: 500, error: 'There was an error uploading the file' });
  }
});

app.listen(8080, () => console.log('File Upload Service is up on Port 8080'));
