var express = require('express');
var router = express.Router();
var loansController = require('../controllers/loansController')

/* GET home page. */

router.get('/', loansController.getAllLoans);
router.post('/', loansController.createLoan);
router.delete('/:id', loansController.deleteLoan);
router.put('/', loansController.updateLoan);
router.get('/:id', loansController.getLoanByID );


module.exports = router;