//import connection file
var connection = require('./connection');
var sql = "update person set fullname='hadi nayani',photo='hadi.jpg' where id=2";
connection.con.query(sql, function (error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('no of rows updated ' + result.affectedRows);
    }
    connection.con.end();
});
