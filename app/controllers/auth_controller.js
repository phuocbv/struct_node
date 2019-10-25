var getLogin = (req, res) => {
    res.render('auth/login');
}

var postLogin = (req, res) => {
    console.log(req.params);
    res.send(req.params);
}

module.exports = {
    getLogin,
    postLogin
}