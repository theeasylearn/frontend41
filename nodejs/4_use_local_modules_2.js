var http = require('http');
//to use local module we have to import javascript file. 
var mymath = require('./mymath');
var common = require('./address');
var server = http.createServer(function(request,response){
    //this function will run for each and every request received on server.
    //create local variable 
    var num1 = 10, num2 = 3;
    var addition = mymath.add(num1,num2);
    var subtraction = mymath.sub(num1,num2);
    var multiplication = mymath.mul(num1,num2);
    var division = mymath.div(num1,num2);
    console.log(addition,subtraction,multiplication,division);

    //display address
    console.log(common.name, " ",common.address," ",common.city," ",common.pincode);
});
server.listen(5000);
console.log('ready to accept request....');
