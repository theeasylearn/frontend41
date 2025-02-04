import { useEffect, useState } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import { getBase } from "./common";
import axios from "axios";
import { showError, showNetworkError } from "./message";
import { ToastContainer } from "react-toastify";
// https://theeasylearnacademy.com/shop/ws/orders.php
export default function Dashboard() {
  //create state array
  let [orders, setOrders] = useState([]);
  let orderStatusMessage = ['','confirmed','dispatched','Delivered','cancel','returned'];
  useEffect(() => {
    if (orders.length === 0) {
      let apiAddress = getBase() + "orders.php";
      axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress
      }).then((response) => {
        console.log(response.data);
        let error = response.data[0]['error'];
        if (error !== 'no')
          showError(error);
        else {
          let total = response.data[1]['total'];
          if (total === 0)
            showError('no orders found');
          else {
            response.data.splice(0, 2);
            setOrders(response.data);
          }
        }
      }).catch((error) => {
        showNetworkError(error);
      });
    }
  });
  let Display = function (item) {
    return (<tr>
      <td>{item.id}</td>
      <td>{item.fullname} <br />
        {item.city}
      </td>
      <td>
        {item.billdate}
      </td>
      <td>{item.amount}</td>
      <td>{orderStatusMessage[item.orderstatus]}</td>
      <td>
        <Link className="btn btn-warning" to={"/orders/view/" + item.id}>
          <i className="fas fa-eye" />
        </Link>
      </td>
    </tr>);
  }
  return (
    <div className="wrapper">
      <ToastContainer />
      <Menu />
      <div className="main">
        <nav className="navbar navbar-expand navbar-theme">
          <a className="sidebar-toggle d-flex me-2" style={{ "margin-top": "10px" }}>
            <i className="hamburger align-self-center" />
          </a>
        </nav>
        <main className="content">
          <div className="container-fluid">
            <div className="header">
              <h1 className="header-title">
                Order management
              </h1>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header text-bg-light">
                    <h3 className="mb-0">Recent orders</h3>
                  </div>
                  <div className="card-body">
                    <table id="myTable" className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name - city</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Operations</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((item) => Display(item))}
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