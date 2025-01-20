import { Link } from "react-router-dom";
import Menu from "./menu";

export default function Dashboard() {
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
          <div className="container-fluid">
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
                      Order ID - 1001
                    </h3>
                    <h3 className="mb-0">
                      Date :- 03-jan-2025
                      <Link to="/orders/print" className="btn btn-success">Print</Link>
                    </h3>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered table-striped mb-3">
                      <tbody><tr>
                        <th>ID</th>
                        <td />
                        <th>Date</th>
                        <td />
                      </tr>
                        <tr>
                          <th>Customer</th>
                          <td />
                          <th>Amount</th>
                          <td />
                        </tr>
                        <tr>
                          <th>Address </th>
                          <td />
                          <th>Payment Mode</th>
                          <td />
                        </tr>
                        <tr>
                          <th>City</th>
                          <td />
                          <th>Payment Status</th>
                          <td />
                        </tr>
                        <tr>
                          <th>pincode</th>
                          <td />
                          <th>Order Status</th>
                          <td />
                        </tr>
                        <tr>
                          <th>Remarks</th>
                          <td />
                          <th>No Of Item</th>
                          <td />
                        </tr>
                      </tbody></table>
                    <h3 className="mb-3">items</h3>
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>NO</th>
                          <th>Name</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colSpan={5} className="text-end">Total 256000</th>
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