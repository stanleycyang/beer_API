var express = require('express');
var UsersController = require('../controllers/UsersController.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  UsersController.index(req, res);
});

// POST for users
router.post('/', function(req, res, next){
  UsersController.create(req, res);
});


module.exports = router;
