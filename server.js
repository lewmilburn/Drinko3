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

require('./processes/socket')(app, socketport, rooms, log);

try {
    app.listen(webport, () => {
        log.info(`[STARTUP][200] Drinko3 listening on port ${webport}`);
    })
} catch (e) {
    log.error("[STARTUP][503] "+e);
}