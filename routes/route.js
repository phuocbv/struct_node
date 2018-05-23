var user_controller = require('../app/controllers/user_controller');

module.exports = (app) => {
    app.get('/user', user_controller.getUser);
};