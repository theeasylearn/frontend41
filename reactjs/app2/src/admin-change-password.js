import Menu from "./menu";
export default function AdminChangePassword()
{
return(<div>
  
  <div className="wrapper">
    <Menu />
    <div className="main">
      <nav className="navbar navbar-expand navbar-theme">
        <a className="sidebar-toggle d-flex me-2 mt-2">
          <i className="hamburger align-self-center" />
        </a>
        <div className="navbar-collapse collapse">
        </div>
      </nav>
      <main className="content">
        <div className="container-fluid">
          <div className="header">
            <h1 className="header-title">
              profile
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header text-bg-light">
                  <h4 className="mb-0">Change password</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="currentPassword" className="form-label">Current Password</label>
                      <input type="password" className="form-control" id="currentPassword" placeholder="Enter current password" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="newPassword" className="form-label">New Password</label>
                      <input type="password" className="form-control" id="newPassword" placeholder="Enter new password" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                      <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm new password" required />
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-success">Change Password</button>
                      <button type="reset" className="btn btn-dark">Clear all</button>
                    </div>
                  </form>
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
                © 2025 - <a className="text-muted" href="dashboard-default.html">the easylearn academy</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</div>
)
}