var express = require('express');
var c = require('./connection');
var app = express();
// Define template engine
app.set('view engine', 'pug');
app.set('views', 'views');
app.get("/site", function(request, response) {
    // SQL queries
    const servicesSql = "SELECT name, description FROM services ORDER BY name";
    const teamSql = "SELECT * FROM team ORDER BY id ASC";
    const pricingSql = "SELECT * FROM pricing ORDER BY id ASC";

    // Wrap queries in promises
    const servicesPromise = new Promise((resolve, reject) => {
        c.con.query(servicesSql, function(error, result) {
            if (error) return reject(error);
            resolve(result);
        });
    });

    const teamPromise = new Promise((resolve, reject) => {
        c.con.query(teamSql, function(error, result) {
            if (error) return reject(error);
            resolve(result);
        });
    });

    const pricingPromise = new Promise((resolve, reject) => {
        c.con.query(pricingSql, function(error, result) {
            if (error) return reject(error);
            resolve(result);
        });
    });

    // Execute both queries and render response after completion
    Promise.all([servicesPromise, teamPromise, pricingPromise])
        .then(([servicesResult, teamResult, pricingResult]) => {
            response.render('nine.pug', {
                services: servicesResult,
                team: teamResult,
                pricing:pricingResult
            });
        })
        .catch(error => {
            console.error('Error executing queries:', error);
            response.status(500).send('Internal Server Error');
        });
});
// define route 
app.get("/one", function (request, response) {
    response.render('one')
});

app.get("/two", function (request, response) {
    response.render('two')
});

app.get("/three", function (request, response) {
    response.render('three')
});

app.get("/branch/one", function (request, response) {
    response.render('four', {
        name: 'Main Branch',
        address1: '105, Eva surbhi, opp aksharwadi',
        address2: 'waghwadi road bhavnagar',
        city: 'Bhavnagar',
        pin: '364001',
        email: 'theeasylearn@gmail.com'
    })
});

app.get("/branch/two", function (request, response) {
    response.render('four', {
        name: 'Regional Branch',
        address1: '105, Eva surbhi, opp aksharwadi',
        address2: 'Sector 1',
        city: 'Gandhinagar',
        pin: '364002'
    })
});

app.get("/branch/three", function (request, response) {
    response.render('four', {
        name: 'Zonal Branch',
        address1: '105, Eva surbhi, opp aksharwadi',
        address2: '150 Root Ring Road',
        city: 'Rajkot',
        pin: '384001'
    })
});
app.get("/cricket/ipl", function (request, response) {
    response.render('five', {
        team: ["Chennai Super Kings", "Mumbai Indians", "Royal Challengers Bangalore", "Kolkata Knight Riders", "Rajasthan Royals", "Delhi Capitals", "Punjab Kings", "Sunrisers Hyderabad", "Lucknow Super Giants", "Gujarat Titans"]
    })
});

app.get("/cricket/ipl2", function (request, response) {
    response.render('six', {
        team: ["Chennai Super Kings", "Mumbai Indians", "Royal Challengers Bangalore", "Kolkata Knight Riders", "Rajasthan Royals", "Delhi Capitals", "Punjab Kings", "Sunrisers Hyderabad", "Lucknow Super Giants", "Gujarat Titans"]
    })
});
app.get("/dish", function (request, response) {
    response.render('seven', {
        dish: { name: 'Pav bhaji', price: '300', weight: '250 gram', extra: 'Butter milk & papad' }
    })
});

app.get("/menu", function (request, response) {
    response.render('eight', {
        menu: [
            { name: 'Pav Bhaji', price: '300', weight: '250 gram', extra: 'Buttermilk & Papad' },
            { name: 'Masala Dosa', price: '280', weight: '220 gram', extra: 'Sambar & Chutney' },
            { name: 'Pulav', price: '250', weight: '300 gram', extra: 'Raita & Papad' },
            { name: 'Chole Bhature', price: '270', weight: '280 gram', extra: 'Pickle & Onion' },
            { name: 'Paneer Tikka', price: '320', weight: '200 gram', extra: 'Mint Chutney' },
            { name: 'Veg Biryani', price: '310', weight: '350 gram', extra: 'Salad & Raita' },
            { name: 'Dhokla', price: '150', weight: '180 gram', extra: 'Green Chutney' },
            { name: 'Idli Sambar', price: '200', weight: '240 gram', extra: 'Coconut Chutney' },
            { name: 'Sev Tameta', price: '260', weight: '250 gram', extra: 'Buttermilk' },
            { name: 'Rajma Chawal', price: '290', weight: '300 gram', extra: 'Onion & Lemon' }
        ]
    })
});



app.listen(5000);
console.log('ready to accept request')