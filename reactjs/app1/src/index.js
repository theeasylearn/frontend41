import ReactDOM from 'react-dom/client';
import React from 'react';
function MyItem(props)
{
    return ( <li class="list-group-item"><i class="fa-solid fa-arrow-right"></i> <span class="fs-4">{props.name}</span></li>);
}
function MyList(props) {
    return (<div class="container">
        <div class="row">
            <div class="col-lg-3">
                <h3>Indian States</h3>
                <ul class="list-group">
                   {props.indianStates.map((state) => {
                         return <MyItem name={state} />
                   })}
                  
                </ul>
            </div>
            <div class="col-lg-3">
                <h3>Pincodes</h3>
                <ul class="list-group">
                   {props.pincodes.map((code) => {
                         return <MyItem name={code} />
                   })}
                  
                </ul>
            </div>
        </div>
    </div>);
}
var indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];  

var Pincodes = [
    "522503", // Amaravati, Andhra Pradesh
    "791111", // Itanagar, Arunachal Pradesh
    "781005", // Dispur, Assam
    "800001", // Patna, Bihar
    "492001", // Raipur, Chhattisgarh
    "403001", // Panaji, Goa
    "382010", // Gandhinagar, Gujarat
    "160017", // Chandigarh, Haryana
    "171001", // Shimla, Himachal Pradesh
    "834001", // Ranchi, Jharkhand
    "560001", // Bengaluru, Karnataka
    "695001", // Thiruvananthapuram, Kerala
    "462001", // Bhopal, Madhya Pradesh
    "400001", // Mumbai, Maharashtra
    "795001", // Imphal, Manipur
    "793001", // Shillong, Meghalaya
    "796001", // Aizawl, Mizoram
    "797001", // Kohima, Nagaland
    "751001", // Bhubaneswar, Odisha
    "160017", // Chandigarh, Punjab
    "302001", // Jaipur, Rajasthan
    "737101", // Gangtok, Sikkim
    "600001", // Chennai, Tamil Nadu
    "500001", // Hyderabad, Telangana
    "799001", // Agartala, Tripura
    "226001", // Lucknow, Uttar Pradesh
    "248001", // Dehradun, Uttarakhand
    "700001"  // Kolkata, West Bengal
  ];
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyList indianStates={indianStates} pincodes={Pincodes} />);