var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('*', function(req, res, next) {
  res.json(1)
  res.sendFile(path.resolve('index.html'))
});

module.exports = router;
