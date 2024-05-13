const{ Sequelize, DataTypes} = require('sequelize');

const BookDataModel = require('./models/Book');
const UserDataModel = require('./models/Users');
const LoanDataModel = require('./models/Loans');

const sequelize_instance = new Sequelize('ficha10', 'root', '12345',{ 
    host: 'localhost',
    dialect: 'mysql'
})

const Book = BookDataModel(sequelize_instance, DataTypes);
const User = UserDataModel(sequelize_instance, DataTypes);
const Loan = LoanDataModel(sequelize_instance, DataTypes);

User.hasMany(Loan, {foreignKey: 'user_id'});
Loan.belongsTo(Loan, {foreignKey: 'user_id'});

Book.hasMany(Loan, {foreignKey: 'book_id'});
Loan.belongsTo(Book, {foreignKey: 'book_id'});


sequelize_instance.authenticate()
    .then (() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.log("Unable to connect", err);
    });

sequelize_instance.sync({ force: false})
    .then(() =>{
        console.log("Tables Created!");
    });

module.exports = {
    User, Book, Loan
}



//sequelize.sync({ force: false})
 //   .then(() => {
   //     console.log('DataBase & tables created!');
    //});