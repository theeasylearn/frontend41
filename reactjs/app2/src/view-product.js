import Menu from "./menu";
import { Link } from "react-router-dom";
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
                Product management
              </h1>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header text-bg-light d-flex justify-content-between">
                    <h3 className="mb-0">Iphone 16 pro max </h3>
                    <Link to="/product" className="btn btn-primary">Back</Link>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-3">
                        <p>Photo</p>
                        <img src="https://via.placeholder.com/150" alt="photo" className="img-fluid" />
                      </div>
                      <div className="col-9">
                        <table className="table table-sm table-bordered table-striped">
                          <tbody><tr>
                            <td width="25%" className="fw-bold">Id</td>
                            <td>1</td>
                          </tr>
                            <tr>
                              <td width="25%" className="fw-bold">Category</td>
                              <td />
                            </tr>
                            <tr>
                              <td width="25%" className="fw-bold">Price</td>
                              <td />
                            </tr>
                            <tr>
                              <td width="25%" className="fw-bold">Weight</td>
                              <td />
                            </tr>
                            <tr>
                              <td width="25%" className="fw-bold">Size</td>
                              <td />
                            </tr>
                            <tr>
                              <td width="25%" className="fw-bold">Detail</td>
                              <td />
                            </tr>
                            <tr>
                              <td width="25%" className="fw-bold">is Live</td>
                              <td />
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
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