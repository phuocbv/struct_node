var user = require('../models/user');

var getUser = () => {
    return new Promise((resolve, reject) => {
        user.find({}, (err, users) => {
            if (err) reject(err);
            resolve(users);
        });
    });
}

var searchUser = (param = {}) => {
    return new Promise((resolve, reject) => {
        user.find(param, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    getUser,
    searchUser
};