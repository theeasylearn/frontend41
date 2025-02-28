var fs = require('fs');
var CurrentFileName = 'fruits.txt';
var newFileName = 'items.txt';
fs.rename(CurrentFileName,newFileName,function(error){
    if(error)
        console.log('file could not be renamed');
    else 
        console.log('file has been renamed successfully');
});

