var fs = require('fs');
var fileName = 'items.txt';
fs.unlink(fileName,function(error){
    if(error)
        console.log('file can not be deleted...');
    else 
        console.log('file has been deleted successfully');
});
