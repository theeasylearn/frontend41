var http = require('http');
//import local module
var db = require('./common.js');
var RequestHandler = function(request,response)
{
    console.log(db.database + " " + db.password + " " + db.user + " " + db.portno + " " + db.server);
}
//create server
var server = http.createServer((request,response) => RequestHandler(request,response));
server.listen(5000);
console.log('ready to accept request..');