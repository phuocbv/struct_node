var user_repository = require('../repositories/user_repository');

var getUser = (req, res) => {
    user_repository.getUser().then((data) => {
        console.log('get user')
        res.send(data);
    }).catch((err) => {
        console.log(err);
    });
}

var getListUser = (req, res) => {
    var conditions = {};
    user_repository.searchUser(conditions).then((users) => {
        console.log(users);
        res.render('user/index', {
            listUser: users
        });
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {
    getUser,
    getListUser
};