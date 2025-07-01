// Set up an express application to run the server
const express = require("express");
// require is like a script tag from elsewhere
// express is a library for running servers
const app = express();

// tell our express application to serve the 'public' folder files
app.use(express.static("public"));

// tell the server to listen on a given port (8080)
const server = app.listen(8080);

console.log("Webserver is running !");

// We will use the socket.io library to manage Websocket connections
const io = require("socket.io")().listen(server);

// Set up each socket connection
io.on("connection", (socket) => {
  console.log(
    "Socket connected!  There are " +
      io.engine.clientsCount +
      " current connections."
  );

  // whenever we get a 'chat' message, forward it to all connected sockets
  socket.on("chat", function (data) {
    io.sockets.emit("chat", data);
  });

  socket.on("draw", function (data) {
    io.sockets.emit("draw", data);
  });

  // socket.on("clear", function () {
  //   io.sockets.emit("clear");
  // });
});
