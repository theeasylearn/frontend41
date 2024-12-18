import ReactDOM from 'react-dom/client';
import React from 'react';
function MyItem(props)
{
    console.log(props);
    return ( <li className="list-group-item"><i className="fa-solid fa-arrow-right"></i> <span className="fs-4">{props.name}</span></li>);
}
function MyList(props) {
    return (<div className="container">
        <div className="row">
            <div className="col-lg-3">
                <h3>Indian States</h3>
                <ul className="list-group">
                   {props.indianStates.map((state,index) => {
                         return <MyItem name={state}  key={index} />
                   })}
                  
                </ul>
            </div>
            <div className="col-lg-3">
                <h3>Pincodes</h3>
                <ul className="list-group">
                   {props.pincodes.map((code,index) => {
                         return <MyItem name={code} key={index} />
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