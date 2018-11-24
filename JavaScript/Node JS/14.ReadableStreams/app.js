/*
Streams:

=> Writable streams -> allow node js to write data for a stream

=> Readable streams -> allow node js to read data for a stream

=> Duplex -> can read read and write to a stream
*/

var http = require('http');
var fs = require('fs');

//create read stream
var myReadStream = fs.createReadStream(__dirname+ '/readMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk received: ');
    console.log(chunk);
    
})