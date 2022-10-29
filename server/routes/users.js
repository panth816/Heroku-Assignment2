var express = require('express');
var router = express.Router();
/* Panth Patel
   301197341
   Assignment 2 */
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
