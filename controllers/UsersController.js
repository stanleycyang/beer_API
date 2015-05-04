var User = require('../models/user.js');

exports.index = function(request, response){
  // GET users listing
  User.find(function(error, users){
    if(error){
      response.send(error);
    }

    response.json(users);
  });
};

exports.create = function(request, response){
  // POST for users
  var user = new User({
    username: request.body.username,
    password: request.body.password
  });

  user.save(function(error){
    if(error){ response.send(error); }
    response.json({message: "New beer drinker added to the locker room!"});
  });
};
