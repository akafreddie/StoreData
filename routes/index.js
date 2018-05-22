var express = require('express');
var router = express.Router();


//LOAD the various controllers
var controllerMongoCollection = require('../controllers/database'); //load controller code dealing with database mongodb and Routes collection



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
//now processing post
//router.post('/StoreData', function(req, res, next) {
//expecting data variable called order--retrieve value using body-parser
  //  var value_name = req.body.order  //retrieve the data associated with order
    //res.send("order succesfully received: " + value_name);
//});


//CODE to route /getAllRoutes to appropriate  Controller function
//**************************************************************************
//***** mongodb get all of the Routes in Routes collection w
//      and Render information iwith an ejs view
router.get('/getAllOrders', controllerMongoCollection.getAllOrders);
router.post('/StoreData', controllerMongoCollection.StoreData);

//**************************************************************************
//***** mongodb get all of the Routes in Routes collection where frequence>=1
//      and sort by the name of the route.  Render information in the views/pages/mongodb.ejs
/*router.get('/mongodb', function (request, response) {

    mongodb.MongoClient.connect(mongoDBURI, function(err,  client) {
        if(err) throw err;
        //get handle to the database
        var theDatabase = client.db('heroku_25f1f6ms');


        //get collection of Routes
        var Routes = db.collection('Routes');
        //get all Routes
        Routes.find({ }).sort({ name: 1 }).toArray(function (err, docs) {
            if(err) throw err;

            response.render('pages/mongodb', {results: docs});

        });

        //close connection when your app is terminating.
        db.close(function (err) {
            if(err) throw err;
        });
    });//end of connect

});//end XXX.get*/