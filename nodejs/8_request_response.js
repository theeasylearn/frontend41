/* 
to get list of states use send request on localhost:5000
    Gujarat, Maharastra, Rajasthan, Uttar Pradesh etc 
to get list of  district in gujarat  localhost:5000/gujarat 
    Ahmedabad, Bhavnagar, Rajkot, Surat, Jamnagar etc 
to get list of  district in gujarat  localhost:5000/maharastra 
    Nagpur, Kanpur, Solapur, Pune etc 
*/
var http = require('http');
var server = http.createServer(function (request, response) {
    var pageAddress = request.url;
    console.log(pageAddress);
    var output = null;
    var heading = null;
    // 1) localhost:5000
    if (pageAddress === '/') {
        heading = "<h1>States of india </h1>";
        output = "Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal";
    }
    // 2) localhost:5000/gujarat
    else if (pageAddress === "/gujarat") {
        heading = "<h1>District of gujarat </h1>";
        output = "Ahmedabad, Amreli, Anand, Aravalli, Banaskantha, Bharuch, Bhavnagar, Botad, Chhota Udaipur, Dahod, Dang, Devbhoomi Dwarka, Gandhinagar, Gir Somnath, Jamnagar, Junagadh, Kheda, Kutch, Mahisagar, Mehsana, Morbi, Narmada, Navsari, Panchmahal, Patan, Porbandar, Rajkot, Sabarkantha, Surat, Surendranagar, Tapi, Vadodara, Valsad";
    }
    // 3) localhost:5000/maharastra
    else if (pageAddress === "/maharastra")
        {
        heading = "<h1>District of maharastra </h1>";
        output = "Ahmednagar, Akola, Amravati, Aurangabad, Beed, Bhandara, Buldhana, Chandrapur, Dhule, Gadchiroli, Gondia, Hingoli, Jalgaon, Jalna, Kolhapur, Latur, Mumbai City, Mumbai Suburban, Nagpur, Nanded, Nandurbar, Nashik, Osmanabad, Palghar, Parbhani, Pune, Raigad, Ratnagiri, Sangli, Satara, Sindhudurg, Solapur, Thane, Wardha, Washim, Yavatmal";
    }
    else 
    {
        heading = "<h1>Data not found</h1>";
        output = "<hr/> please try something else";
    }
    output = "<html><body> " + heading + output + "</body></html>";
    response.writeHead(200,{'content-type':'text/html'});
    response.write(output);
    response.end();
});
//start server 
server.listen(5000);
console.log('ready to accept request on server....');
