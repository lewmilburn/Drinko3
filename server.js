const express = require('express')
const { join } = require("path");

require('dotenv').config();

const app = express()
const webport = process.env.PORT_HTTP
const socketport = 4040
const log4js = require('log4js');

log4js.configure({
    appenders: { everything: { type: 'file', filename: 'logs.log' } },
    categories: { default: { appenders: ['everything'], level: 'ALL' } }
});

const log = log4js.getLogger();

let rooms = [];

log.info(`[STARTUP] Starting Drinko3...`);

app.engine('.html', require('ejs').__express);
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'static')));

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.get("/g/*", function(req, res) {
    res.render('game.ejs');
});

log.info(`[STARTUP] Starting socket...`);

require('./processes/socket')(app, socketport, rooms, log);

log.info(`[STARTUP] Starting database...`);

app.listen(webport, () => {
    log.info(`[STARTUP] Drinko3 listening on port ${webport}`);
})