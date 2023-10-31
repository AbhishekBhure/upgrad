import net from "net";

const server = net.createServer(function (connection) {
  console.log("connection made!");
});

server.listen(8080, function () {
  console.log("server is listening");
});
