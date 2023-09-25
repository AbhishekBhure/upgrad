const fs = require("fs");

function writeFile(data) {
  fs.writeFileSync("server-log.txt", data, () => {
    console.log("Error added to log!");
  });
}

function readFile() {
  try {
    const errorData = fs.readFileSync("server-log.txt");
    console.log(errorData.toString());
  } catch (e) {
    writeFile(Date.now().toLocaleString() + " - File not Found");
  }
}

readFile();
readFile();
