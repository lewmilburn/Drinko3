let http = require("http");
let socketIo = require("socket.io");

module.exports = function (app) {
    let server = http.createServer(app);
    let io = socketIo(server);
    io.on("connection", function (socket) {
        socket.on('join', function(room) {
            socket.join(room);
            console.log('[SOCKET] User joined room '+room);
        });
        socket.on('join_name', function(name) {
            console.log('[SOCKET] User '+name+' connected.');
        });
    });

    server.listen(3000);

    console.log(`[STARTUP] Socket started`);
}