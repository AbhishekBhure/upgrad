import fs from "fs";

export function writeLogLine(fileName, line) {
  try {
    fs.writeFileSync(fileName, line, { flag: "a" }); // Use flag: "a" to append the line to an existing file or create a new one
  } catch (err) {
    throw err;
  }
}

export function readLogFile(fileName) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  });
}

export function appendLogLine(fileName, line) {
  fs.appendFile(fileName, line, function (err, data) {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  });
}
