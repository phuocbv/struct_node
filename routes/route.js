module.exports = (app) => {
    app.map({
        'GET /': 'controller.index',
        'GET /listUser': 'user_controller.getListUser',
        'GET /login': 'auth_controller.getLogin',
        'POST /login': 'auth_controller.postLogin'
    });
};