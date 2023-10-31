import net from "net";

const client = net.connect({ port: 8080 }, function () {
  console.log("Connected to the server");
});
