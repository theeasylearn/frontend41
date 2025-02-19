var http = require('http');
//import local module
var mail = require('./Email.js');
var RequestHandler = function(request,response)
{
    var m1 = new mail.MyEmail();
    m1.SendMail('rahul@gmail.com','Happy Valentine Day','How are you brother');
}
//create server
var server = http.createServer((request,response) => RequestHandler(request,response));
server.listen(5000);
console.log('ready to accept request..');