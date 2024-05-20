const User  = require("../sequelize").User;
var jwt = require('jsonwebtoken');

function generateAccessToken(email,password) {
    var token = jwt.sign({ email, password}, process.env.TOKEN_SECRET,
        {expiresIn: '1800s'});
    return token
}


exports.login = (req, res) => {
    var { email, password } = req.body;

    User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if(user == null){
            res.status(404).send("Email not Fund");
        }
        else if (user.password != password) {
            res.status(401).send("Password Incorreta");
        }
        else {
            var token = generateAccessToken(email,password);
                res.send({user: User, token: token});
        }
    }).catch(function (err){
        res.status(500).send(JSON.stringify(err));
    });
};

exports.signup = (req, res) => {

    var { email, password } = req.body;

    User.findOne({
        where: {
            email: email
        }
    }).then(result => {
        if(result == null){
            User.create({ 'email': email, 'password': password})
            .then(user => {
                var token = generateAccessToken(email,password);
                res.send({user: user, token: token});
            });
        }
        else {
            req.flash('signupMessage', 'That email is already taken.');
            res.redirect('/signup');
        }
    }).catch(function (err){
        req.flash('signupMessage', err);
        res.redirect('/signup');
    })
};