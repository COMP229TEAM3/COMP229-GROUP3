var express = require('express');
var router = express.Router();
const Surveys = require('../models/survey');

/* GET survey listing listing. */
router.get('/', function(req, res, next) {
  Surveys.find().then(function(err, surveys){
    res.send(surveys);
  });
});

router.post('/', function(req, res, next) {
    // TODO: should we just json for request?
});

module.exports = router;
