var express = require('express');
var router = express.Router();
var path = require('path');
var Movie = require('../models/movie');

/* GET home page. */
router.get('/', function (req, res, next) {
  Movie.find(function (err, docs) {
    var movieChunks = [];
    var movieChunks2 = [];
    var chunkSize = 2;
    var chunkSize2 = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
      movieChunks.push(docs.slice(i, i + chunkSize));
    }

    for (var i = 0; i < docs.length; i += chunkSize2) {
      movieChunks2.push(docs.slice(i, i + chunkSize2));
    }

    res.render('movieList/index', { title: 'Movies', movies: movieChunks, movies2: movieChunks2 });
  });
});

router.get('/start-learning/:_id', function (req, res, next) {
  var movieId = req.params._id;

  Movie.findById(movieId, function (err, docs) {
    if (err) {
      return res.send("Please come back and try again");
    }
    res.render('learn2');
    console.log("success");
  });
});

router.get('/learn', function (req, res, next) {
  res.render('learn2', { title: 'Learn'});
});

router.get('/home', function (req, res, next) {
  res.render('home', { title: 'Home'});
});


module.exports = router;

// User.findOne({'local.rooms': {$elemMatch: {name: req.body.username}}}, function (err, user) {

//   if (err){
//       return done(err);
//   }    

//   if (user) {
//       console.log("ROOM NAME FOUND");
//       req.roomNameAlreadyInUse = true;
//       next();

//   } else {
//       req.roomNameAlreadyInUse = false;
//       console.log("ROOM NAME NOT FOUND");
//       next();

//   }

// });