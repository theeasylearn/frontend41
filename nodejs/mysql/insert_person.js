//import connection file
var connection = require('./connection');
var sql = "insert into person (fullname,gender,dob) values ('Karan Mehta','1','2004-04-26')";
connection.con.query(sql,function(error,result){
    if(error)
    {
        console.log(error);
    }    
    else 
    {
        console.log('one record inserted ' + result.insertId);
        console.log('no of rows added ' + result.affectedRows);
    }
    connection.con.end();
});
