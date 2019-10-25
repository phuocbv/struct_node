var database = require('../../config/database');
var mongoose = require('mongoose');
mongoose.connect(database.url);

module.exports = {
    mongoose,
    database
};