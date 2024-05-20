const { request } = require("../app");
const Loans = require("../models/Loans");

const Loan = require("../sequelize").Loan;
const Book = require("../sequelize").Book;
const User = require("../sequelize").User;

exports.getAllLoans = async (req, res, next) => {
   try{
    var loans = await Loan.findAll({include: [{model: User}, {model: Book}]});
    res.send(loans);
   }catch (error) {
        res.status(401).send("Erros occured: " + error);
   }
}

exports.createLoan = (req, res, next) => {
   Loans.create(req.body)
   .then(newLoan => {
      res.send("iD inserted: " + newLoan.id);
   });
}

exports.deleteLoan = (req, res, next) => {
   Loans.destroy({
      where: {
          id: req.param.id
      }
  }).then(() => {
      if (result == 0){
         res.send("Utilizador nao encontrado");
      }
      else {
         res.send("Utilizador Apagado")
      }
  });
}

exports.updateLoan = (req, res, next) => {
   const body = req.body;
   Loans.update({
      return_date: body.return_date,
      loan_date: body.loan_date
       }, {
       where: {
           id: req.params.id
       }
       }).then(() => {
           res.send(body);
       }); 
}
exports.getLoanByID = (req, res, next) => {
   Loans.findByPk(req.params.id).then((user) => {
      if (user) {
          res.send(user);
      } else {
          res.status(404).send("User not found!");
      }
  });
}


