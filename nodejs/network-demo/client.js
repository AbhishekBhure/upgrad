const net = require("net");
const fs = require("fs");

const SERVER_PORT = 3000;
const SERVER_HOST = "localhost";
const sendFilePath = "./file_to_send.txt";

const fileStream = fs.createReadStream(sendFilePath);

const client = net.createConnection(SERVER_PORT, SERVER_HOST, () => {
  console.log("Connected to server!!");
  fileStream.pipe(client);
});

fileStream.on("end", () => {
  console.log("File sent successfully!!");
});

fileStream.on("error", (err) => {
  console.log("An err occured", err);
  client.end();
});

client.on("error", (err) => {
  console.log("An err occured", err);
  fileStream.close();
});
