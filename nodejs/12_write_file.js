var http = require('http');
var fs = require('fs');
const fileName = 'feedback.txt'; //ready only 
var server = http.createServer(function(request,response){
    var output;
    var name = "Hadi nayani";
    var mobile = '1231231231';
    var feedback = 'Good Morning';
    var fileContent = `Customer Name = ${name} mobile = ${mobile} \n feedback = ${feedback}`;
    //asynchronous 
    fs.writeFile(fileName,fileContent,function(error){
        if(error)
        {
            output = 'error occurred...';
        }       
        else
        {
            output = 'Content has been written info file successfully';
        } 
        response.writeHead(200,{'content-type':'text/html'});
        response.write(output);
        response.end();
    });
});
server.listen(5000);
console.log('ready to accept request...');
