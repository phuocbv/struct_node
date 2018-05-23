var user = require('../models/user');

var getUser = () => {
    return new Promise((resolve, reject) => {
        user.find({}, (err, users) => {
            if (err) reject(err);
            resolve(users);
        });
    });
}

module.exports = {
    getUser
};