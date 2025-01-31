import Menu from "./menu";
import { Link } from "react-router-dom";
import axois from "axios";
import { getBase } from './common';
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import { showError, showMessage, showNetworkError } from "./message";
// https://theeasylearnacademy.com/shop/ws/users.php
export default function Users() {
  //create state array 
  let [customers, setCustomers] = useState([]);
  let Display = function (item) {
    return (<tr>
      <td>{item.id}</td>
      <td>{item.email}</td>
      <td>{item.mobile}</td>
     
      
      <td>
        <Link className="btn btn-primary btn-sm" to="/orders">
          <i className="fas fa-edit" /> View History
        </Link>

      </td>
    </tr>);
  }
  useEffect(() => {
    //code in this block will execute after jsx in return statement execute.
    //used to call api 
    if(customers.length === 0)
    {
      let apiAddress = getBase() + "users.php";
      axios({
        url: apiAddress,
        responseType: 'json',
        method: 'get'
      }).then((response) => {
        // this function is promise it execute only after response is successfully received from server
        //response is one type of object. it has the response and other data
        console.log(response.data);
        let error = response.data[0]['error'];
        if (error !== 'no')
          showError(error);
        else {
          let total = response.data[1]['total'];
          if (total === 0)
            showError('no users found');
          else {
            //delete 1st two objects
            response.data.splice(0, 2);
            //copy response.data into state array
            setCustomers(response.data);
          }
        }
      }).catch((error) => {
        showNetworkError(error);
      });  
    }  
  })
  return (
    <div className="wrapper">
      <Menu />
      <div className="main">
        <nav className="navbar navbar-expand navbar-theme">
          <a className="sidebar-toggle d-flex me-2" style={{ "margin-top": "10px" }}>
            <i className="hamburger align-self-center" />
          </a>
        </nav>
        <main className="content">
          <ToastContainer />
          <div className="container-fluid">
            <div className="header">
              <h1 className="header-title">
                User management
              </h1>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header text-bg-light d-flex justify-content-between">
                    <h3>User List</h3>
                  </div>
                  <div className="card-body">
                    <table id="myTable" className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Email</th>
                          <th scope="col">Mobile</th>
                         
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customers.map((item) => Display(item))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row text-muted">
              <div className="col-12 text-center">
                <p className="mb-0">
                  © 2025 - <a className="text-muted" href="#">the easylearn academy</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}