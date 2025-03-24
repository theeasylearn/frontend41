var express = require('express');
var connection = require('./connection');
var app = express();
//require below 2 middleware to accept input submitted by post, put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PERSON = "/person";
const SUBJECT = "/subject";

//fetch all person  
//localhost:5000/person
//method get 

//fetch one person  
//localhost:5000/person?id=2
//method get 

//fetch one male person  
//localhost:5000/person?gender=M
//method get 

//fetch one male person  
//localhost:5000/person?gender=F
//method get 

app.get(PERSON, function (request, response) {

    let id = request.query.id; 
    let gender = request.query.gender; 
    let sql;
    if(id !== undefined)
        sql = `select * from person where id=${id}`;
    else if(gender !== undefined)
        sql = `select * from person where gender='${gender}' order by id desc`;
    else 
        sql = "select * from person order by id desc";
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

//insert new person  
//localhost:5000/person 
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

//delete person 
//localhost:5000/person  
//method delete
app.delete(PERSON, function (request, response) {
    var id = request.body.id;
    if (id === undefined) {
        response.json([{ 'error': 'input is missing, id required' }]);
    }
    else {
        let sql = `delete from person where id=${id}`;
        connection.con.query(sql, function (error, result) {
            if (error)
                response.json([{ 'error': 'oops something went wrong contact developer' }]);
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'person deleted' }]);
            }
        });
    }
});

//update person 
//localhost:5000/person  
//method put
app.put(PERSON, function (request, response) {
    //object destructing 
    var { id, fullname, gender, dob, salary } = request.body;
    //input validation
    if (fullname === undefined || gender === undefined || dob === undefined || salary === undefined || id === undefined) {
        response.json([{ 'error': 'input missing, id fullname gender dob salary is required' }]);
    }
    else 
    {
        let sql = `update person set fullname='${fullname}', gender='${gender}',dob='${dob}',salary='${salary}' where id='${id}'`;
        connection.con.query(sql, function (error, result) {
            if (error)
                response.json([{ 'error': 'oops something went wrong contact developer' }]);
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'person updated' }]);
            }
        });
    }
});
app.get(SUBJECT, (req, res) => {
    let id = req.query.id;
    let sql = id ? `SELECT * FROM subject WHERE id=${id}` : `SELECT * FROM subject ORDER BY id DESC`;
    
    connection.con.query(sql, (error, result) => {
        if (error) {
            res.json([{ 'error': 'oops something went wrong, contact developer' }]);
        } else {
            result.unshift({ total: result.length });
            result.unshift({ error: 'no' });
            res.json(result);
        }
    });
});

// Insert a new subject
app.post(SUBJECT, (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.json([{ 'error': 'input missing, name and description are required' }]);
    }
    
    let sql = `INSERT INTO subject (name, description) VALUES ('${name}', '${description}')`;
    connection.con.query(sql, (error, result) => {
        if (error) {
            res.json([{ 'error': 'oops something went wrong, contact developer' }]);
        } else {
            res.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'subject inserted' }]);
        }
    });
});

// Update a subject
app.put(SUBJECT, (req, res) => {
    const { id, name, description } = req.body;
    if (!id || !name || !description) {
        return res.json([{ 'error': 'input missing, id, name, and description are required' }]);
    }
    
    let sql = `UPDATE subject SET name='${name}', description='${description}' WHERE id=${id}`;
    connection.con.query(sql, (error, result) => {
        if (error) {
            res.json([{ 'error': 'oops something went wrong, contact developer' }]);
        } else {
            res.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'subject updated' }]);
        }
    });
});

// Delete a subject
app.delete(SUBJECT, (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.json([{ 'error': 'input missing, id is required' }]);
    }
    
    let sql = `DELETE FROM subject WHERE id=${id}`;
    connection.con.query(sql, (error, result) => {
        if (error) {
            res.json([{ 'error': 'oops something went wrong, contact developer' }]);
        } else {
            res.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'subject deleted' }]);
        }
    });
});
app.listen(5000);
console.log('ready to accept request');
