var { mongoose, database } = require('./model');
var model = require('./model');

model.mongoose.Schema({

});

var user = mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model(database.table.user, user, database.table.user);