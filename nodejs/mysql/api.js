var express = require('express');
var connection = require('./connection');
var app = express();
//require below 2 middleware to accept input submitted by post, put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PERSON = "/person";
//fetch products 
//localhost:5000/product 
//method get 
app.get(PERSON, function (request, response) {
    let sql = "select * from person order by id desc";
    //run sql command
    connection.con.query(sql, function (error, result) {
        if (error)
            response.json([{ 'error': 'oops something went wrong contact developer' }]);
        else {
            result.unshift({ total: result.length });
            result.unshift({ error: 'no' });
            response.json(result);
        }
    });
});

//insert product 
//localhost:5000/product 
//method POST 
app.post(PERSON, function (request, response) {
    var { fullname, gender, dob } = request.body;
    if (fullname === undefined || gender === undefined || dob === undefined) {
        response.json([{ 'error': 'input missing, fullname gender dob is required' }]);
    }
    else {
        var sql = `insert into person (fullname,gender,dob) values ('${fullname}','${gender}','${dob}')`;
        connection.con.query(sql, function (error, result) {
            if (error) {
                response.json([{ 'error': 'oops something went wrong contact developer' }]);
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'person inserted' }]);
            }
        });
    }
});

app.listen(5000);
console.log('ready to accept request');
