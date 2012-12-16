var http = require('http');
var path = require('path');

var express = require('express');
var socketIo = require('socket.io');


// Init the http server.
var app = express();
var server = http.createServer(app);


// Init socket.io
io = socketIo.listen(server);


// Configure web server.
app.configure( function() {
    // Serve static content (html, css, js) from folder /public
    app.use(express.static(path.join(__dirname, 'public')));
});


// Socket.io configuration.
io.sockets.on('connection', function (socket) {

    // Each client sends his position on the gameboard and that is broadcasted back to everyone else.
    socket.on('XY', function (coords) {
        socket.broadcast.emit('XY', coords);
    });

});


// Bind web server to port.
server.listen(3000);
