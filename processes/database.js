module.exports = function(log) {
    let mysql = require('mysql');

    let con = mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    });

    con.connect(function(err) {
        if (err) throw err;
        log.info(`[STARTUP] Database started, connected to "`+process.env.DB_NAME+`"`);
    });

    return con;
}