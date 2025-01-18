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
                Product management
              </h1>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header text-bg-light d-flex justify-content-between">
                    <h3>Product List</h3>
                    <a href="admin-add-product.html" className="btn btn-primary">Add Product</a>
                  </div>
                  <div className="card-body">
                    <table id="myTable" className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Title</th>
                          <th scope="col">Photo</th>
                          <th scope="col">Price</th>
                          <th scope="col">stock</th>
                          <th scope="col">Is Live</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            IPhone 16 pro max
                            <br />
                            <span className="fa fa-tags" /> (Phone)
                          </td>
                          <td>
                            <a href="https://picsum.photos/1000" data-fancybox="gallery" data-caption="Sample Title">
                              <img src="https://picsum.photos/100" alt="Photo" style={{ "max-width": "100px" }} />
                            </a>
                          </td>
                          <td>Rs 125000</td>
                          <td>100</td>
                          <td>Yes</td>
                          <td>
                            <a className="btn btn-warning btn-sm" href="admin-edit-product.html">
                              <i className="fas fa-edit" /> Edit
                            </a>
                            <button className="btn btn-danger btn-sm">
                              <i className="fas fa-trash-alt" /> Delete
                            </button>
                            <a className="btn btn-warning btn-sm" href="admin-view-product-detail.html">
                              <i className="fas fa-edit" /> Detail
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