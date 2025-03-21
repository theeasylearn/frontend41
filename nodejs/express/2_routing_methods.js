var express = require('express');
var app = express();
//create an array of objects
var products = [
    { id: 1, name: "Product A", price: 19.99, size: "Small", weight: 200 },
    { id: 2, name: "Product B", price: 29.99, size: "Medium", weight: 500 },
    { id: 3, name: "Product C", price: 39.99, size: "Large", weight: 800 },
    { id: 4, name: "Product D", price: 9.99, size: "Small", weight: 150 },
    { id: 5, name: "Product E", price: 49.99, size: "Medium", weight: 600 },
    { id: 6, name: "Product F", price: 14.99, size: "Small", weight: 250 },
    { id: 7, name: "Product G", price: 99.99, size: "Large", weight: 1200 },
    { id: 8, name: "Product H", price: 79.99, size: "Medium", weight: 700 },
    { id: 9, name: "Product I", price: 59.99, size: "Large", weight: 900 },
    { id: 10, name: "Product J", price: 39.99, size: "Small", weight: 300 },
    { id: 11, name: "Product K", price: 89.99, size: "Medium", weight: 750 },
    { id: 12, name: "Product L", price: 109.99, size: "Large", weight: 1500 },
    { id: 13, name: "Product M", price: 24.99, size: "Small", weight: 400 },
    { id: 14, name: "Product N", price: 34.99, size: "Medium", weight: 550 },
    { id: 15, name: "Product O", price: 44.99, size: "Large", weight: 850 },
    { id: 16, name: "Product P", price: 64.99, size: "Small", weight: 350 },
    { id: 17, name: "Product Q", price: 74.99, size: "Medium", weight: 650 },
    { id: 18, name: "Product R", price: 84.99, size: "Large", weight: 1100 },
    { id: 19, name: "Product S", price: 94.99, size: "Small", weight: 450 },
    { id: 20, name: "Product T", price: 104.99, size: "Medium", weight: 800 }
]
//create route to get all books 
app.get("/product",function(request,response){
   response.json(products);
});
//positional argument routes 
//create route to get only particular product with id 
app.get("/product/:id",function(request,response){
    var temp = products.filter((item) => {
        if(item.id == request.params.id)
            return item;
    });
    if(temp.length === 0)
        response.json([{'error':'no product found'}]);
    else
        response.json(temp);
});
//create route that return product between given price range 
http://localhost:5000/product/10/50
app.get("/product/:lower/:upper",function(request,response){
    var temp = products.filter((item) => {
        if(item.price>=request.params.lower && item.price<=request.params.upper)
            return item;
    });
    if(temp.length === 0)
        response.json([{'error':'no product found'}]);
    else
        response.json(temp);
});

//create route to insert new book 
app.post("/product",function(request,response){
    response.send('I will insert new  book in future.');
});


//create route to update existing book
app.put("/product",function(request,response){
    response.send('I will update  book in future.');
});

//create route to delete book 
app.delete("/product",function(request,response){
    response.send('I will delete  book in future.');
});
app.listen(5000);
console.log('ready to accept request');