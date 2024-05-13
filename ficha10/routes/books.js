var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController')

/* GET home page. */

router.get('/', booksController.getAllBooks);

module.exports = router;