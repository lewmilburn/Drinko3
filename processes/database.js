module.exports = async function(log) {
    try {
        let mysql = require('mysql');

        let con = mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASS
        });

        con.connect(function (err) {
            log.info('[DB][500] Error connecting to the database - '+err);
            log.info(`[DB][200] Database started, connected to "` + process.env.DB_NAME + `"`);
        });

        return con;
    } catch (e) {
        log.info('[DB][500] Error connecting to the database - '+e);
        socket.emit('error', e);
        return false;
    }
}