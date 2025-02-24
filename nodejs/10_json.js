var http = require('http');
var url = require('url');
const india = {
    name: "India",
    captain: "Rohit Sharma",
    viceCaptain: "Hardik Pandya",
};

const pakistan = {
    name: "Pakistan",
    captain: "Babar Azam",
    viceCaptain: "Shadab Khan",
};

const newZealand = {
    name: "New Zealand",
    captain: "Kane Williamson",
    viceCaptain: "Tom Latham",
};

const bangladesh = {
    name: "Bangladesh",
    captain: "Najmul Hossain Shanto",
    viceCaptain: "Litton Das",
};

const australia = {
    name: "Australia",
    captain: "Pat Cummins",
    viceCaptain: "Travis Head",
};

var server = http.createServer(function (request, response) {
    var pageAddress = request.url;
    var output;
    if(pageAddress == "/india")
        output = JSON.stringify(india);
    else if(pageAddress == "/pakistan")
        output = JSON.stringify(pakistan);
    else if(pageAddress == "/newzealand")
        output = JSON.stringify(newZealand);
    else if(pageAddress == "/bangladesh")
        output = JSON.stringify(bangladesh);
    else if(pageAddress == "/australia")
        output = JSON.stringify(australia);
    else 
        output ='please send team name';
    response.writeHead(200, { 'content-type': 'application/json' });
    response.write(output);
    response.end();
});
server.listen(5000);
console.log('ready to accept request on server....');
