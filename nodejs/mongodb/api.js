var express = require('express');
var { dbPromise } = require('./connection');
const { con } = require('../mysql/connection');
var app = express();
//require below 2 middleware to accept input submitted by post, put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const system = "/system";
//insert document
app.post(system, function (request, response) {
    var object = request.body;
    dbPromise.then((database) => {
        database.collection('data').insertOne(object);
        response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'data saved' }]);
    }).catch((error) => {
        console.log(error);
        response.json([{ 'error': 'oops something went wrong contact developer' }]);
    });
});
// fetch all documents 
//localhost:5000/system

// fetch given no of documents
//localhost:5000/system?limit=3

// fetch given no of documents in title wise ascending order 
//localhost:5000/system?orderby=title

//fetch given no of documents where price is less then 200 
//127.0.0.1:5000/system?field=price&value=200

app.get(system, function (request, response) {
    var limit = request.query.limit;
    var sortOrder = request.query.orderby;
    var field = request.query.field;
    var value = request.query.value;

    console.log(request.query);

    dbPromise.then((database) => {
        if (field !== undefined && value !== undefined) {

            let condition = {}; //empty object
            condition[field] = { $eq: value };
            console.log(condition,'we are here');
            database.collection('data').find(condition).toArray(function (err, documents) {
                if (err)
                    response.json([{ 'error': 'oops something went wrong contact developer' }]);
                else
                    response.json(documents);
            });
        }
        else if (limit !== undefined) {
            limit = parseInt(limit);
            database.collection('data').find({}).limit(limit).toArray(function (err, documents) {
                if (err)
                    response.json([{ 'error': 'oops something went wrong contact developer' }]);
                else
                    response.json(documents);
            });
        }
        else if (sortOrder !== undefined) {
            let sortField = {}; //empty object
            sortField[sortOrder] = 1;
            database.collection('data').find({}).sort(sortField).toArray(function (err, documents) {
                if (err)
                    response.json([{ 'error': 'oops something went wrong contact developer' }]);
                else
                    response.json(documents);
            });
        }
       
        else {
            database.collection('data').find({}).toArray(function (err, documents) {
                if (err)
                    response.json([{ 'error': 'oops something went wrong contact developer' }]);
                else
                    response.json(documents);
            });
        }

    }).catch((error) => {
        console.log(error);
        response.json([{ 'error': 'oops something went wrong contact developer' }]);
    });
});

//update document
app.put(system, function (request, response) {
    var object = request.body;
    dbPromise.then((database) => {
        var condition = { name: request.body.name };
        var updateObject = { $set: { surname: object.surname, age: object.age } };
        //updateMany
        database.collection('data').updateOne(condition, updateObject, function (err, result) {
            if (err)
                response.json([{ 'error': 'oops something went wrong contact developer' }]);
            else
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'data updated' }]);
        });
    }).catch((error) => {
        response.json([{ 'error': 'oops something went wrong contact developer' }]);
    });
});

//delete document
app.delete(system, function (request, response) {
    var object = request.body;
    dbPromise.then((database) => {
        let condition = { title: request.body.title };
        //deleteOne
        database.collection('data').deleteMany(condition, function (err, result) {
            if (err)
                response.json([{ 'error': 'oops something went wrong contact developer' }]);
            else
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'one document deleted' }]);
        });
    }).catch((error) => {
        response.json([{ 'error': 'oops something went wrong contact developer' }]);
    });
});

app.listen(5000);
console.log('ready to accept request');
