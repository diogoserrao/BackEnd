const User = require('../sequelize').User;

exports.getAllUsers = (req, res) => {
    User.findAll().then(users => {
        res.send(users);
    });
}