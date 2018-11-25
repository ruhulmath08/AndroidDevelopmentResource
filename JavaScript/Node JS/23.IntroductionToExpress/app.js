var express = require('express');

//access all of the functionality of express
var app = express();

app.get('/', function(req, res){
    res.send('This is the Home page');
});

app.get('/contact', function(req, res){
    res.send('This is the contact page');
});

app.listen(3000);