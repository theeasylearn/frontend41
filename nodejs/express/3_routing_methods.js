var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//require below 2 middleware to accept input submitted by post, put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
app.get("/product", function (request, response) {
    response.json(products);
});
//positional argument routes 
//create route to get only particular product with id 
//localhost:5000/product/filter?id=1

//create route to get only particular product between price range
//localhost:5000/product/filter?lower=10&upper=50

//create route to get only particular product between price range
//localhost:5000/product/filter?size=medium

app.get("/product/filter", function (request, response) {
    var id = request.query.id;
    var lower = request.query.lower;
    var upper = request.query.upper;
    var size = request.query.size;
    if (id !== undefined) {
        var temp = products.filter((item) => {
            if (item.id == id)
                return item;
        });
        if (temp.length === 0)
            response.json([{ 'error': 'no product found' }]);
        else
            response.json(temp);
    }
    else if (lower !== undefined && upper !== undefined) {
        var temp = products.filter((item) => {
            if (item.price >= lower && item.price <= upper)
                return item;
        });
        if (temp.length === 0)
            response.json([{ 'error': 'no product found' }]);
        else
            response.json(temp);
    }
    else if (size !== undefined) {
        var temp = products.filter((item) => {
            if (item.size === size)
                return item;
        });
        if (temp.length === 0)
            response.json([{ 'error': 'no product found' }]);
        else
            response.json(temp);
    }
    else {
        response.json([{ 'error': 'input missing' }]);
    }
});



//create route to insert new product  
//localhost:5000/product
// input id,name,price,size, weight (required)
app.post("/product", function (request, response) {
    var id = request.body.id;
    var name = request.body.name;
    var price = request.body.price;
    var size = request.body.size;
    var weight = request.body.weight;
    var newProduct = { 'id': id, 'name': name, 'price': price, 'size': size, 'weight': weight };
    products.push(newProduct);
    response.json([{ 'error': 'no' }, { 'message': 'Product Added' }]);
});


//create route to update existing product
// input id,name,price,size, weight (required)

app.put("/product", function (request, response) {
    var id = request.body.id;
    var name = request.body.name;
    var price = request.body.price;
    var size = request.body.size;
    var weight = request.body.weight;
    var newProduct = { 'id': id, 'name': name, 'price': price, 'size': size, 'weight': weight };
    var isFound = false;
    var temp = products.map((item) => {
        if (item.id === parseInt(id)) {
            isFound = true;
            return newProduct;
        }
        else
            return item;
    });

    if (isFound == true) {
        products = temp;
        response.json([{'error':'no'},{'message':'Product Updated'}]);
    }
    else {
        response.json([{ 'error': 'no' }, { 'message': 'Product not found' }]);
    }
});

//create route to delete book 
app.delete("/product", function (request, response) {
    response.send('I will delete  book in future.');
});
app.listen(5000);
console.log('ready to accept request');