/*
Templating Engines:
-------------------


*/

var express = require('express');

var app = express();

//set template engine
app.set('view engine', 'ejs');

//use middleware
app.use('/assets', express.static('stuff'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/contact', function (req, res) {
    console.log(req.query);    
    res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function (req, res) {
    var data = { age: 30, job: 'Programmer', hobbys: ['coding', 'reading', 'Swiming', 'problem solving'], country: 'Bangladesh' };
    res.render('profile', { person: req.params.name, data: data });
});

app.listen(3000);