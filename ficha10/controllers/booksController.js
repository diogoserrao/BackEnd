const Book = require("../sequelize").Book;

exports.getAllBooks = (req, res, next) => {
    Book.findAll()
    .then(books => {
        res.send(books);
    });
}

exports.createBook = (req, res, next) => {}
exports.deleteBook = (req, res, next) => {}
exports.updateBook = (req, res, next) => {}
exports.getBookByID = (req, res, next) => {}