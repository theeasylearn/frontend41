var http = require('http');
var server = http.createServer(function(request,response){
    //this function will run for each and every request received on server.
    console.log('we have received your request.... Thank you');
});
server.listen(5000);
console.log('ready to accept request....');