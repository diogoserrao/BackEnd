var express = require('express');
const usersController = require('../controllers/UsersController');
var router = express.Router();
const jwt = require('jsonwebtoken')

router.use(authenticateTokenFromHeaders);

function authenticateTokenFromHeaders(req, res, next){
  const authHeader =req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.removeListener.TOKEN_SECRET, (err, user) => {
      if (err)
        return res.sendStatus(403);
      req.user = user;
      next();
    });
}


router.get('/', usersController.getAllUsers);


module.exports = router;

