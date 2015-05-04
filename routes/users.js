var express = require('express');
var User = require('../models/user.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function(err, users){
    if(err){
      res.send(err);
    }
    res.json(users);
  });
});

// POST for users
router.post('/', function(req, res, next){
  var user = new User({
    username: req.body.username,
    password: req.body.password
  });

  user.save(function(err){
    if(err){
      res.send(err);
    }
    res.json({message: "New beer drinker added to the locker room!"});
  });
});


module.exports = router;
