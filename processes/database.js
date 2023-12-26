module.exports = function() {
    let mysql = require('mysql');

    let con = mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    return con;
}