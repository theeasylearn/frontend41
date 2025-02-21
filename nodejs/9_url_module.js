var http = require('http');
var url = require('url');
var routes = require('./bus_routes');
var server = http.createServer(function (request, response) {
    var pageAddress = request.url;
    console.log(pageAddress);
    var requestData = url.parse(request.url, true);
    console.log(requestData);
    //127.0.0.1:5000/routes.html?from=bhavnagar&to=rajkot
    var output = null;
    var heading = null;
    if (requestData.pathname !== "/routes.html") {
        heading = "<h1>Sorry invalid request</h1>";
        output = "<hr/> try something else";
    }
    else {
        var data = requestData.query;
        var from = data.from;
        var to = data.to;
        if (from === undefined || to === undefined) {
            heading = "<h1>input is missing</h1>";
            output = "<hr/> kindly pass from and to";
        }
        else {
            let busRoutes = routes.busRoutes;
            let availableRoutes = busRoutes.filter(function (item) {
                if (item.source === from && item.destination === to)
                    return item;
            });
            if (availableRoutes.length === 0) {
                heading = "<h1>No Bus found</h1>";
                output = "<hr/>why don't buy car.";
            }
            else {
                heading = `<h1>${availableRoutes.length} bus found</h1>`;
                output = '';
                availableRoutes.map((item) => {
                    output += `<li>${item.source} to ${item.destination}</li>`
                });
                output = "<ul>" + output + "</ul>";
            }
        }
    }
    output = "<html><body> " + heading + output + "</body></html>";
    response.writeHead(200,{'content-type':'text/html'});
    response.write(output);
    response.end();
});
server.listen(5000);
console.log('ready to accept request on server....');
