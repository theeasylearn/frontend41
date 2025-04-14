var express = require('express');
var app = express();
// define template engine
app.set('view engine','pug');
app.set('views','views');

// define route 
app.get("/one",function(request,response){
    response.render('one')
});

app.get("/two",function(request,response){
    response.render('two')
});

app.get("/three",function(request,response){
    response.render('three')
});

app.get("/branch/one",function(request,response){
    response.render('four',{
        name: 'Main Branch',
        address1: '105, Eva surbhi, opp aksharwadi',
        address2: 'waghwadi road bhavnagar',
        city: 'Bhavnagar',
        pin: '364001'
    })
});

app.get("/branch/two",function(request,response){
    response.render('four',{
        name: 'Regional Branch',
        address1: '105, Eva surbhi, opp aksharwadi',
        address2: 'Sector 1',
        city: 'Gandhinagar',
        pin: '364002'
    })
});

app.get("/branch/three",function(request,response){
    response.render('four',{
        name: 'Zonal Branch',
        address1: '105, Eva surbhi, opp aksharwadi',
        address2: '150 Root Ring Road',
        city: 'Rajkot',
        pin: '384001'
    })
});
app.listen(5000);
console.log('ready to accept request')