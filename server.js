var express = require('express');
var config = require('./config/config');
var app = express();

require('./routes/route')(app);

app.listen(config.port);