var http = require('http');
var mydatetime = require('./mydatetime');
var server = http.createServer(function(request,response){
    console.log('Today Date ' + mydatetime.getDate());
    console.log('Current Time ' + mydatetime.getTime());
});
server.listen(5000);
console.log('ready to accept request....');