var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://aanzures:mma#1996Aas@ds053708.mlab.com:53708/heroku_25f1f6ms';

/** getAllRoutes controller logic that current does model logic too -connects to Mongo database and
 * queries the Routes collection to retrieve all the routes and build the output usig the
 * ejs template mongodb.ejs found in views directory
 * @param request
 * @param response
 *
 */
module.exports.StoreData =  function (request, response) {

    mongodb.MongoClient.connect(mongoDBURI, function(err,  client) {
        if(err) throw err;


        //get handle to the databse
        var theDatabase = client.db('heroku_25f1f6ms');


        //get collection of routes
        var Routes = theDatabase.collection('ORDERS');
        var Routes = theDatabase.collection('SHIPPING');
        var Routes = theDatabase.collection('BILLING');
        var Routes = theDatabase.collection('CUSTOMERS');

        //now processing post
        router.post('/StoreData', function(req, res, next) {
//expecting data variable called order--retrieve value using body-parser
            var value_name = req.body.order  //retrieve the data associated with order
            res.send("order succesfully received: " + value_name);
        });

        var bodyParser = require('body-parser');
        var path = require ('path'); //to work with separtors on any OS including Windows
        var querystring = require('querystring'); //for use in GET Query string of form URI/path?name=value

        router.use(bodyParser.json()); // for parsing application/json
        router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencode
//#########################################

        router.get('/StoreData', function(req, res, next) {
            //expecting data variable called name --retrieve value using body-parser
            var body = JSON.stringify(req.body);  //if wanted entire body as JSON
            var params = JSON.stringify(req.params);//if wanted parameters
            var query = req.query;  //if wanted the query
            var value_name = req.query.name;  //retrieve the data associated with name
            res.send("hello " + value_name);
        });


        //FIRST showing you one way of making request for ALL routes and cycle through with a forEach loop on returned Cursor
        //   this request and loop  is to display content in the  console log
        var c = Routes.find({});

        c.forEach(
            function(myDoc) {
                console.log( "name: " + myDoc.name );  //just  loging the output to the console
            }
        );


        //SECOND -show another way to make request for ALL Routes  and simply collect the  documents as an
        //   array called docs that you  forward to the  getAllRoutes.ejs view for use there
        Routes.find().toArray(function (err, docs) {
            if(err) throw err;

            response.render('getAllOrders', {results: docs});  //was tittle changed to results and have to change getAllOrders.

        });


        //Showing in comments here some alternative read (find) requests
        //this gets Routes where frequency>=10 and sorts by name
        // Routes.find({ "frequency": { "$gte": 10 } }).sort({ name: 1 }).toArray(function (err, docs) {
        // this sorts all the Routes by name
        //  Routes.find().sort({ name: 1 }).toArray(fu namenction (err, docs) {


        //close connection when your app is terminating.
        client.close(function (err) {
            if(err) throw err;
        });
    });//end of connect
};//end function
