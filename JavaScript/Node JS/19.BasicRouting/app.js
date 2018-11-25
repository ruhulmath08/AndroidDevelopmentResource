/*
=== and !== are strict comparison operators:

JavaScript has both strict and type-converting equality comparison. For strict equality the objects being compared must have the same type and:

Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
Two numbers are strictly equal when they are numerically equal (have the same number value). NaN is not equal to anything, including NaN. Positive and negative zeros are equal to one another.
Two Boolean operands are strictly equal if both are true or both are false.
Two objects are strictly equal if they refer to the same Object.
Null and Undefined types are == (but not ===). [I.e. (Null==Undefined) is true but (Null===Undefined) is false]
*/

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('Request was made: ' + req.url);
    if (req.url === '/homepage' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/contac') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contac.html').pipe(res);
    }
    else if (req.url === '/api/ruhul') {
        var ruhul = [{ name: 'ruhul', age: 30 }, { name: 'reza', age: 30 }];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(ruhul));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log("Now listning port : 3000");