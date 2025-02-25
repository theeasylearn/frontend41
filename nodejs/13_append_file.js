var http = require('http');
var fs = require('fs');
var url = require('url')
const fileName = 'feedback.txt'; //ready only 
var server = http.createServer(function(request,response){
    var requestInfo = url.parse(request.url,true);
    var data = requestInfo.query;
    // console.log(data.name,data.mobile,data.message);
    var output;
    var name = data.name;
    var mobile = data.mobile;
    var feedback = data.message;
    var fileContent = `\nCustomer Name = ${name} mobile = ${mobile} \n feedback = ${feedback}`;
    //asynchronous 
    fs.appendFile(fileName,fileContent,function(error){
        if(error)
        {
            output = 'error occurred...';
        }       
        else
        {
            output = 'Content has been added info file successfully';
        } 
        response.writeHead(200,{'content-type':'text/html'});
        response.write(output);
        response.end();
    });
});
server.listen(5000);
console.log('ready to accept request...');
