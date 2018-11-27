/*
body-parser:
------------
Node.js body parsing middleware.

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

Note As req.body's shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, req.body.foo.toString() may fail in multiple ways, for example the foo property may not be there or may not be a string, and toString may not be a function and instead a string or other user input.
*/

var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();

// create application/x-www-form-urlencoded parser
//middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//set template engine
app.set('view engine', 'ejs');

//use middleware
app.use('/assets', express.static('stuff'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/contact', function (req, res) {
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);  
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function (req, res) {
    var data = { age: 30, job: 'Programmer', hobbys: ['coding', 'reading', 'Swiming', 'problem solving'], country: 'Bangladesh' };
    res.render('profile', { person: req.params.name, data: data });
});

app.listen(3000);