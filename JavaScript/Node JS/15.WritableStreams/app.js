var http = require('http');
var fs = require('fs');

//reading stream
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//writing stream create a file in the location
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//every time reading stream read data this function trigger and receive chunk of data 
myReadStream.on('data', function(chunk){
    console.log('new Chunk received');
    //write stream write data in file
    myWriteStream.write(chunk)
});