var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
// var User = require('./models/User')
var MapPin = require('../models/MapPin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MapTracker' });
});

router.get('/getData', function(req, res, next) {
  MapPin.find(function(err, posts){
    if(err){ return next(err); }

    res.json(posts);
  });
});

router.post('/setData', function(req, res, next) {
  var pindata = new MapPin(req.body);

  pindata.save(function(err, pindata){
    if(err){ return next(err); }

    res.json(pindata);
  });
});

module.exports = router;
