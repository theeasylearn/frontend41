export default function Login()
{
    return (<div>
        <div className="splash active">
          <div className="splash-icon" />
        </div>
        <main className="main h-100 w-100">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div className="d-table-cell align-middle">
                  <div className="text-center mt-4">
                    <h1 className="h2">Welcome Administrator</h1>
                    <p className="lead">
                      Sign in to your account to continue
                    </p>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="m-sm-4">
                        <form>
                          <div className="mb-3">
                            <label>Email</label>
                            <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
                          </div>
                          <div className="mb-3">
                            <label>Password</label>
                            <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" />
                            <small>
                              <a href="pages-reset-password.html">Forgot password?</a>
                            </small>
                          </div>
                          <div className="text-center mt-3">
                            <input type="submit" className="btn btn-lg btn-primary w-100" value="Login" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      );
}