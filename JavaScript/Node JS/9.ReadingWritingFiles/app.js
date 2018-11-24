var fs = require('fs');

/*

//read and write file synchronize version

//read file
var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);

//write file
fs.writeFileSync('writeMe.txt', readMe);
*/

//read and write file asynchronous version
fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt',data);
});






