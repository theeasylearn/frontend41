var express = require('express');
var app = express();
var output = null;
var heading = null;
//create route home page 
//localhost 
//127.0.0.1:5000
app.get("/", function (request, response) {
    heading = "<h1>States of india </h1>";
    output = "Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal";
    output = "<html><body> " + heading + output + "</body></html>";
    response.send(output);
});
app.get("/gujarat", function (request, response) {
    heading = "<h1>District of gujarat </h1>";
    output = "Ahmedabad, Amreli, Anand, Aravalli, Banaskantha, Bharuch, Bhavnagar, Botad, Chhota Udaipur, Dahod, Dang, Devbhoomi Dwarka, Gandhinagar, Gir Somnath, Jamnagar, Junagadh, Kheda, Kutch, Mahisagar, Mehsana, Morbi, Narmada, Navsari, Panchmahal, Patan, Porbandar, Rajkot, Sabarkantha, Surat, Surendranagar, Tapi, Vadodara, Valsad";
    output = "<html><body> " + heading + output + "</body></html>";
    response.send(output);
});
app.get("/maharastra", function (request, response) {
    heading = "<h1>District of Maharastra </h1>";
    output = "Ahmednagar, Akola, Amravati, Aurangabad, Beed, Bhandara, Buldhana, Chandrapur, Dhule, Gadchiroli, Gondia, Hingoli, Jalgaon, Jalna, Kolhapur, Latur, Mumbai City, Mumbai Suburban, Nagpur, Nanded, Nandurbar, Nashik, Osmanabad, Palghar, Parbhani, Pune, Raigad, Ratnagiri, Sangli, Satara, Sindhudurg, Solapur, Thane, Wardha, Washim, Yavatmal";
    output = "<html><body> " + heading + output + "</body></html>";
    response.send(output);
});
//create function that will execute for non existing url(page address)
app.all("*", function (request, response) {
    heading = "<h1>Data not found</h1>";
    output = "<hr/> please try something else";
    output = "<html><body> " + heading + output + "</body></html>";
    response.send(output);
});
app.listen(5000);
console.log('ready to accept request');