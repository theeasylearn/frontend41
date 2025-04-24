var { MongoClient } = require('mongodb');
var url = "mongodb://127.0.0.1:27017";
var dbName = "frontend40";
var client = new MongoClient(url);
var dbPromise = client.connect().then(() =>{
    console.log('connection created...');
    return client.db(dbName);
}).catch((error) =>{
    console.log('error occurred while connecting to mongodb');
    console.log(error);
});
module.exports = {dbPromise}