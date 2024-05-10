let http = require("http");
let socketIo = require("socket.io");

const he = require('he');

module.exports = function (app, socketport, rooms) {
    let server = http.createServer(app);
    let io = socketIo(server);
    io.on("connection", function (socket) {
        socket.on('join', function(room, name) {
            room = he.escape(room);
            name = he.escape(name);

            socket.join(room);

            if (typeof rooms[room] === "undefined") {
                rooms[room] = [];
            }

            rooms[room].push(name);

            console.log('[SOCKET][200] '+name+' joined room '+room);
            io.sockets.emit('joined',rooms[room]);
        });

        socket.on('new_game', function(name) {
            name = he.escape(name);
            let room = Math.floor(100000 + Math.random() * 900000);

            try {
                let db = require(__dirname + '/database')();
                db.query("INSERT INTO `games` (`id`, `gameID`, `host`) VALUES (NULL, '"+room+"', "+db.escape(name)+")", function(error, results, fields) {
                    if (error) {
                        console.log('[SQL][500] Executed query :'+"INSERT INTO `games` (`id`, `gameID`, `host`) VALUES (NULL, '"+room+"', "+db.escape(name)+")");
                        console.log('[SQL][500] Error executing query:', error);
                        socket.emit('error', error);
                    } else {
                        console.log('[SQL][200] Executed query :'+"INSERT INTO `games` (`id`, `gameID`, `host`) VALUES (NULL, '"+room+"', "+db.escape(name)+")");
                    }

                    db.end();

                    socket.emit('goToRoom',room);

                    console.log('[SOCKET][200] Created room '+room);
                });
            } catch (e) {
                console.log('Error connecting '+name+' to the game - '+e);
                socket.emit('error', e);
            }
        })
    });

    io.listen(socketport);

    console.log(`[STARTUP][200] Socket started`);
}