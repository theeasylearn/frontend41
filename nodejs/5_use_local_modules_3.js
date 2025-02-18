var http = require('http');
//to use local module we have to import javascript file. 
var pwd = require('./password');
var server = http.createServer(function(request,response){
    var SecretPassword = pwd.HashPassword('123123');
    console.log(SecretPassword);

    var isMatched = pwd.ComparePasswords('123123',SecretPassword);
    console.log(isMatched);
});
server.listen(5000);
console.log('ready to accept request....');
