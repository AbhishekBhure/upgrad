import net from "net";

const server = net.createServer(function (socket) {
  socket.write("Hello");

  socket.on("data", function (data) {
    console.log(`Recieved: ${data.toString()}`);
  });

  socket.on("error", function (err) {
    console.error(err);
  });
});

server.listen(8080, function () {
  console.log("server is listening");
});
