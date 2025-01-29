import Menu from "./menu";
import { Link } from "react-router-dom";
// https://theeasylearnacademy.com/shop/ws/orders.php
export default function Dashboard() {
  
    return (
        <div className="wrapper">
       <Menu />
        <div className="main">
          <nav className="navbar navbar-expand navbar-theme">
            <a className="sidebar-toggle d-flex me-2" style={{"margin-top":"10px"}}>
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
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Operations</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Ankit Patel <br />
                              Bhavnagar
                            </td>
                            <td>
                              03-jan-2025
                            </td>
                            <td>256000</td>
                            <td>online - Received</td>
                            <td>Received</td>
                            <td>
                              <Link className="btn btn-warning btn-sm" to="/orders/view">
                                <i className="fas fa-edit" /> Detail
                              </Link>
                            </td>
                          </tr>
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