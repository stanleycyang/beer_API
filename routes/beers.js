var express = require('express');
var router = express.Router();
var BeerController = require('../controllers/BeersController.js');


// Index
router.get('/', function(req, res, next){
  BeerController.index(req, res);
});

// Show
router.get('/:beerId', function(req, res, next){
  BeerController.show(req, res);
});

// Post
router.post('/', function(req, res, next){
  BeerController.create(req, res);
});

// PATCH
router.put('/:beerId', function(req, res, next){
  BeerController.update(req, res);
});

// DELETE
router.delete('/:beerId', function(req, res, next){
  BeerController.destroy(req, res);
});

module.exports = router;
