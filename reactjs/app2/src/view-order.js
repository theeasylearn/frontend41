import { Link } from "react-router-dom";
import Menu from "./menu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBase } from "./common";
import { showNetworkError, showError } from "./message";
import axios from "axios";
import { ToastContainer } from "react-toastify";
export default function Dashboard() {
  //create variable 
  let { id } = useParams();
  let [order, setOrder] = useState({});
  let [items, setItems] = useState([]);
  let orderStatusMessage = ['', 'confirmed', 'dispatched', 'Delivered', 'cancel', 'returned'];
  let [isFetched, setIsFetched] = useState(false);
  let [total, setTotal] = useState(0);
  let getOrderInfo = function () {
    let apiAddress = getBase() + "orders.php?id=" + id;
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress,
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
          setOrder(response.data[0]);
          setIsFetched(true);
        }
      }
    }).catch((error) => showNetworkError(error));
  }
  let getOrderItems = function () {
    let apiAddress = getBase() + "order_details.php?orderid=" + id;
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress,
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
          let temp=0;
          for (let index = 0; index < response.data.length; index++) {
              temp += response.data[index]['price'] * response.data[index]['quantity'];
          }
          setTotal(temp);
          console.log(temp);
          setItems(response.data);

        }
      }
    }).catch((error) => showNetworkError(error));
  }

  let Display = function (row) {
    return (<tr>
      <td>{row.id}</td>
      <td>{row.title}</td>
      <td class='text-end' >{row.quantity}</td>
      <td class='text-end' >{row.price}</td>
      <td class='text-end' >{row.price * row.quantity}</td>
    </tr>);
  }
  useEffect(() => {
    if (isFetched === false) {
      getOrderInfo();
      getOrderItems();
    }
  });
  return (
    (order === null) ? "" : <div className="wrapper">
      <Menu />
      <div className="main">
        <nav className="navbar navbar-expand navbar-theme">
          <a className="sidebar-toggle d-flex me-2" style={{ "margin-top": "10px" }}>
            <i className="hamburger align-self-center" />
          </a>
        </nav>
        <main className="content">
          <div className="container-fluid">
            <ToastContainer />
            <div className="header">
              <h1 className="header-title">
                Order management
              </h1>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header text-bg-light d-flex justify-content-between">
                    <h3 className="mb-0">
                      Order ID - {order.id}
                    </h3>
                    <h3 className="mb-0">
                      Date :- {order.billdate}
                      <Link to="/orders/print" className="btn btn-success">Print</Link>
                    </h3>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered table-striped mb-3">
                      <tbody><tr>
                        <th>ID</th>
                        <td>{order.id}</td>
                        <th>Date</th>
                        <td>{order.billdate}</td>
                      </tr>
                        <tr>
                          <th>Customer</th>
                          <td>{order.fullname}</td>
                          <th>Amount</th>
                          <td>{order.amount}</td>
                        </tr>
                        <tr>
                          <th>Address </th>
                          <td>{order.address1 + " " + order.address2}</td>
                          <th>Payment Mode</th>
                          <td>{(order.paymentmode == '1') ? "cash" : "online"}</td>
                        </tr>
                        <tr>
                          <th>City</th>
                          <td>{order.city}</td>
                          <th>Payment Status</th>
                          <td>{(order.paymentstatus == '1') ? "paid" : "unpaid"}</td>
                        </tr>
                        <tr>
                          <th>pincode</th>
                          <td>{order.pincode}</td>
                          <th>Order Status</th>
                          <td>{orderStatusMessage[order.orderstatus]}</td>
                        </tr>
                        <tr>
                          <th>Remarks</th>
                          <td>{order.remarks}</td>
                          <th>No Of Item</th>
                          <td>{items.length}</td>
                        </tr>
                      </tbody></table>
                    <h3 className="mb-3">items</h3>
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>NO</th>
                          <th>Name</th>
                          <th class='text-end'>Quantity</th>
                          <th class='text-end'>Price</th>
                          <th class='text-end'>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((row) => Display(row))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colSpan={5} className="text-end">Total {total}</th>
                        </tr>
                      </tfoot>
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