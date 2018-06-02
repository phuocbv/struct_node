var getLogin = (req, res) => {
    res.render('auth/login');
}

var postLogin = (req, res) => {
    res.send(req.params);
}

module.exports = {
    getLogin,
    postLogin
}