
/*
//read write file using pipe
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.pipe(myWriteStream);

*/

var http = require('http');
var fs = require('fs');

//create a server which have req and res object and this res object is a writable stream
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type' : 'text/plain'});

    //create a read stream and read data fron specific file
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    //take a stream and write data in browser
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listning to port 3000');
