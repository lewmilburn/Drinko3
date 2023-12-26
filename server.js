const express = require('express')
const {join} = require("path");
const app = express()
const port = 80

app.engine('.html', require('ejs').__express);
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'static')));

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.get("/g/*", function(req, res) {
    res.render('game.ejs');
});

app.listen(port, () => {
    console.log(`[STARTUP] Drinko3 listening on port ${port}`)
})

let sqlConnect = require('./processes/database');
sqlConnect();