const express = require('express')
const { join } = require("path");

require('dotenv').config();

const webport = 80;//process.env.PORT
const log4js = require('log4js');

let app = express();
let server = require('http').createServer(app);
const sio = require("socket.io");
let io = sio(server);

log4js.configure({
    appenders: { everything: { type: 'file', filename: 'drinko3.log' } },
    categories: { default: { appenders: ['everything'], level: 'ALL' } }
});

const log = log4js.getLogger();

try {
    server.listen(webport, () => {
        log.info(`[STARTUP][200] Drinko3 listening on port ${webport}`);
    })
} catch (e) {
    log.error("[STARTUP][503] "+e);
}

let rooms = [];

log.info(`[STARTUP][200] Starting Drinko3...`);

app.engine('.html', require('ejs').__express);
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'static')));

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.get("/g/*", function(req, res) {
    res.render('game.ejs');
});

log.info(`[STARTUP][200] Starting socket...`);

require('./processes/socket')(io, webport, rooms, log);