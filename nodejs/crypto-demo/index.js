const readline = require("readline");
const crypto = require("crypto");

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Server started waiting for the message from client!!");

r1.on("line", (input) => {
  const encryptedMsg = encryptMsg(input);
  console.log(`Encyrted Message: ${encryptedMsg}`);

  const decryptedMsg = decryptMsg(encryptedMsg);
  console.log(`Decrypted Message: ${decryptedMsg}`);
});

function encryptMsg(message) {
  const ciper = crypto.createCipheriv("aes-256-ctr", key, iv);
  let encrypted = ciper.update(message, "utf8", "hex");
  encrypted += ciper.final("hex");
  return encrypted;
}

function decryptMsg(encryptedMsg) {
  const deciper = crypto.createDecipheriv("aes-256-ctr", key, iv);
  let decrypted = deciper.update(encryptedMsg, "hex", "utf8");
  decrypted += deciper.final("utf8");
  return decrypted;
}
