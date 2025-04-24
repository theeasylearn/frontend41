var express = require('express');
var {dbPromise} = require('./connection');
var app = express();
//require below 2 middleware to accept input submitted by post, put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const system = "/system";
//insert document
app.post(system,function(request,response){

});

// fetch document 
app.get(system,function(request,response){

});

//update document
app.put(system,function(request,response){

});

//delete document
app.delete(system,function(request,response){

});

app.listen(5000);
console.log('ready to accept request');