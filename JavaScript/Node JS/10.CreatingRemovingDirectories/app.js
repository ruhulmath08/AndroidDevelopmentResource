var fs = require('fs');

/*
//make directory
fs.mkdirSync('stuff');
*/

/*
//remove directory
fs.rmdirSync('stuff');
*/

/*
//make directory and keep file in it in asynchronus way
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data, function(){
            console.log("Done");
            
        });
    });
});
*/

/*
//cannot delete because directory is not empty
fs.rmdir('stuff');
*/


//delete 'writeMe.txt' file from 'stuff' directory
fs.unlink('./stuff/writeMe.txt', function(){
    console.log("File is deleted!!!")
    //delete directory 'stuff'
    fs.rmdir('stuff', function(){
        console.log("Folder is deleted!!!");
    });
});

