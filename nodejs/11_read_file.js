var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var pageAddress = request.url;
    var filename = '';
    if (pageAddress == "/home")
        filename = 'pages/home.html';
    else if (pageAddress == "/about")
        filename = 'pages/about.html';
    else if (pageAddress == "/product")
        filename = 'pages/product.html';
    else if (pageAddress == "/service")
        filename = 'pages/service.html';
    else if (pageAddress == "/contact")
        filename = 'pages/contact.html';
    else
        filename = 'pages/404.html';
    fs.readFile(filename, function (error, FileContent) {
        response.writeHead(200, { 'content-type': 'text/html' });
        if (error) {
            response.write('some error occured');
        }
        else {
            response.write(FileContent);
        }
        response.end();
    });
});
server.listen(5000);
console.log('ready to accept request on server....');