/*
Templating Engines:
-------------------


*/

var express = require('express');

var app = express();

//set template engine
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function (req, res) {
    var data = {age: 30, job: 'Programmer', country: 'Bangladesh'};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);