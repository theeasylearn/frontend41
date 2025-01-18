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
                          <th scope="col">Acc. Date</th>
                          <th scope="col">Is Active</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>ankit3385@gmail.com</td>
                          <td>1234567890</td>
                          <td>Fri 03-jan-2025</td>
                          <td>
                            Yes
                          </td>
                          <td>
                            <a className="btn btn-primary btn-sm" href="admin-order.html">
                              <i className="fas fa-edit" /> View History
                            </a>
                            <a className="btn btn-info btn-sm" href="admin-order.html">
                              <i className="fas fa-envelope" /> Send Email
                            </a>
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