//import connection file
var connection = require('./connection');
var sql = "select * from person order by id desc";
//run sql command
connection.con.query(sql, function (error,result) {
    if (error) 
    {
        console.log(error);
    }
    else 
    {
        let size = result.length;
        for(let index=0;index<size;index=index+1)
        {
            console.log(result[index]['id']," ",result[index]['fullname']," ",
                result[index]['gender']," ",result[index]['dob']," ",result[index]['salary']);
        }    
    }
    connection.con.end();
});
