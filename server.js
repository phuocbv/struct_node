var express = require('express');
var config = require('./config/config');
var path = require('path');
var app = express();

app.set('controllers', path.join(__dirname, '/app/controllers/'));
app.set('views', path.join(__dirname, '/app/views/'))
app.use(express.static(path.join(__dirname, '/public/')));
app.set('view engine', 'ejs');
require('express-map2')(app);
require('./routes/route')(app);

app.listen(config.port);