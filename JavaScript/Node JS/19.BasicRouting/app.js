var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request was made: '+req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contac'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contac.html').pipe(res);
    }
    else if(req.url === '/api/ruhul'){
        var ruhul = [{name: 'ruhul', age: 30}, {name: 'reza', age: 30}];
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(ruhul));
    }
    else{
        res.writeHead(404, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log("Now listning port : 3000");