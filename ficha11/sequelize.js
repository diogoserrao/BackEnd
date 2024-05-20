var dotenv = require('dotenv');
dotenv.config();

const{ Sequelize, DataTypes} = require('sequelize');
const UserDataModel = require('./models/Users');


const sequelize_instance = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASS,{ 
    dialect: 'mysql'
})

const User = UserDataModel(sequelize_instance, DataTypes);


sequelize_instance.authenticate()
    .then (() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.log("Unable to connect", err);
    });

sequelize_instance.sync({ force: true})
    .then(() =>{
        console.log("Tables Created!");
        User.create({email:'diogoserrao@gmail.com', password:'12345'})
    });

module.exports = {
    User
}
