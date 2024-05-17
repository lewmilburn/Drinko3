const he = require('he');

module.exports = function (io, webport, rooms, log) {
    io.on("connection", function (socket) {
        socket.on('join', function(room, name) {
            room = he.escape(room);
            name = he.escape(name);

            socket.join(room);

            if (typeof rooms[room] === "undefined") {
                rooms[room] = [];
            }

            rooms[room].push(name);

            log.info('[SOCKET][200] '+name+' joined room '+room);
            io.sockets.emit('joined',rooms[room]);
        });

        socket.on('new_game', function(name) {
            name = he.escape(name);
            let room = Math.floor(100000 + Math.random() * 900000);

            let db = require(__dirname + '/database')(log);

            if (db !== false) {
                db.query("INSERT INTO `games` (`id`, `gameID`, `host`) VALUES (NULL, '" + room + "', " + db.escape(name) + ")", function (error) {
                    if (error) {
                        log.info('[DB][500] Executed query :' + "INSERT INTO `games` (`id`, `gameID`, `host`) VALUES (NULL, '" + room + "', " + db.escape(name) + ")");
                        log.info('[DB][500] Error executing query:', error);
                        socket.emit('error', error);
                    } else {
                        log.info('[DB][200] Executed query :' + "INSERT INTO `games` (`id`, `gameID`, `host`) VALUES (NULL, '" + room + "', " + db.escape(name) + ")");
                    }

                    db.end();

                    socket.emit('goToRoom', room);

                    log.info('[SOCKET][200] Created room ' + room);
                });
            }
        });
    });

    log.info(`[SOCKET][200] Socket started`);
}