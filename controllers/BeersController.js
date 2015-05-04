// Bring the Beer Model into our controller
var Beer = require('../models/beer.js');

// Index
exports.index = function(request, response){
  // Finds all the beer
  Beer.find(function(error, beers){
    // Error getting the beers
    if(error){response.send(error);}

    // Successfully send back all the beers
    response.json(beers);

  });
};

// Show
exports.show = function(request, response){
  Beer.findById(request.params.beerId, function(error, beer){
    // Error finding the beer
    if(error){ response.send(error);}

    // Success finding the beer
    response.json(beer);
  });
};

// Create
exports.create = function(request, response){
  // Set the new beer to the request parameter
  var beer = new Beer();
  beer.name = request.body.name;
  beer.type = request.body.type;
  beer.quantity = request.body.quantity;

  beer.save(function(error){
    // Failed to save to database
    if(error){ response.send(error); }

    // Successfully saved
    response.json({message: "Beer " + beer.name + " has been added to the locker!"});
  });
};

// Update
exports.update = function(request, response){
  Beer.findById(request.params.beerId, function(error, beer){
    // Failed to find the beer
    if(error){ response.send(error); }

    // Change the quantity of the beer
    beer.quantity = request.body.quantity;

    // Save the beer
    beer.save(function(error){
      if(error){response.send(error);}
      response.send(beer);
    });

  });
};

// Destroy
exports.destroy = function(request, response){
  Beer.findByIdAndRemove(request.params.beerId, function(error){
    if(error){response.send(error);}
    response.json({message: "Beer has been removed from our locker"});
  });
};
