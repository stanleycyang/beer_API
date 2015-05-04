var express = require('express');
var router = express.Router();

// Define model

var Beer = require('../models/beers.js');

// Index
router.get('/', function(req, res, next){
  Beer.find(function(error, beers){
    if(error){
      res.send(error);
    }
    res.json(beers);
  });
});

// Show
router.get('/:beerId', function(req, res, next){
  Beer.findById(req.params.beerId, function(err, beer){
    if(err){
      res.send(err);
    }
    res.json(beer);
  });
});

// Post
router.post('/', function(req, res, next){
  var beer = new Beer();
  beer.name = req.body.name;
  beer.type = req.body.type;
  beer.quantity = req.body.quantity;

  beer.save(function(err){
    if(err){
      res.send(err);
    }

    res.json({message: "Beer added to the locker!", data: beer});
  });
});

// PATCH
router.put('/:beerId', function(req, res, next){
  Beer.findById(req.params.beerId, function(err, beer){
    if(err){res.send(err);}
    beer.quantity = req.body.quantity;

    beer.save(function(err){
      if(err){res.send(err);}
      res.send(beer);
    });
  });
});

// DELETE
router.delete('/:beerId', function(req, res, next){
  Beer.findByIdAndRemove(req.params.beerId, function(err){
    if(err){res.send(err);}
    res.json({message: "Beer has been removed from our locker!"});
  });

});

module.exports = router;
