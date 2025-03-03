var http = require('http');
var event = require('events');
var url = require('url');
const { json } = require('stream/consumers');
//create list/array
var assets = [
    { name: 'ac', price: 25000, isLoanTaken: false },
    { name: 'TV', price: 50000, isLoanTaken: false },
    { name: 'Bike', price: 125000, isLoanTaken: false }
]; //empty array
var getLoanApproval = function (data) {
    var message = [];
    var position = 0;
    var isFound = false;
    assets.some((item, index) => {
        //console.log(item);
        if (item.name === data.name && data.price < parseInt(item.price) && item.isLoanTaken === false) {
            isFound = true;
            position = index
            return true
        }

    });
    if (isFound === true) {
        message.push({ 'success': 'yes' });
        message.push({ 'message': 'loan approved' });
        assets[position]['isLoanTaken'] = true;
    }
    else {
        message.push({ 'success': 'no' });
        message.push({ 'message': 'loan rejected' });
    }
    return message;
}
var server = http.createServer(function (request, response) {
    var requestData = url.parse(request.url, true);
    var data = requestData.query;
    console.log(data);
    // console.log(data.name);
    // console.log(data.price);
    var message = getLoanApproval(data)
    response.writeHead(200, { 'content-type': 'application/json' });
    response.write(JSON.stringify(message));
    response.end();
});
server.listen(5000);
console.log('ready to accept event');