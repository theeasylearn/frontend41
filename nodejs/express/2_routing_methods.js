var express = require('express');
var app = express();
//create route to get all books 
app.get("/book",function(request,response){
    response.send('I will return books in future.');
});

//create route to insert new book 
app.post("/book",function(request,response){
    response.send('I will insert new  book in future.');
});


//create route to update existing book
app.put("/book",function(request,response){
    response.send('I will update  book in future.');
});

//create route to delete book 
app.delete("/book",function(request,response){
    response.send('I will delete  book in future.');
});
app.listen(5000);
console.log('ready to accept request');