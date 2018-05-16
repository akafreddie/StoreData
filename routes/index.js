var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//now processing post
router.post('/StoreData', function(req, res, next) {
//expecting data variable called order--retrieve value using body-parser
var value_name = req.body.order  //retrieve the data associated with order
res.send("order succesfully received: " + value_name);
});



module.exports = router;
