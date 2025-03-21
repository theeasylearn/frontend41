//import connection file
var connection = require('./connection');
var sql = "delete from person where id=1";
connection.con.query(sql,function(error,result){
    if(error)
    {
        console.log(error);
    }    
    else 
    {
        console.log('no of rows deleted ' + result.affectedRows);
    }
    connection.con.end();
});
