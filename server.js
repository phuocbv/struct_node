var express = require('express');
var config = require('./config/config');
var path = require('path');
var ect = require('ect');
var bodyParser = require('body-parser');



var app = express();


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser());
var ectRenderer = ect({ watch: true, root: path.join(__dirname, '/app/views/'), ext: '.ect' });

//load folder content file controller
app.set('controllers', path.join(__dirname, '/app/controllers/'));

//load folder content file view
app.set('views', path.join(__dirname, '/app/views/'));
// app.set('view engine', 'ect');
// app.engine('ect', ectRenderer.render);

//folder public is image/css/js
app.use(express.static(path.join(__dirname, '/public/')));

//use layout ejs
var engine = require('ejs-locals');
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//define route
require('express-map2')(app);
require('./routes/route')(app);

app.listen(config.port);