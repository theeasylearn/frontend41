import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// 
const root = ReactDOM.createRoot(document.getElementById('root'));
var page = ( <div className="container">
    {/* this is an example of sip calculator */}
    <div className="row">
        <div className="col-lg-6 offset-3">
            <div className="card shadow">
                <div className="card-header text-bg-primary">
                    <h2>S.I.P Calculator</h2>
                </div>
                <div className="card-body">
                    <form action="">
                        {/* this is form */}
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="amount" placeholder="Monthly Investment" />
                            <label for="amount">Monthly Investment</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="rate" placeholder="Expected Return Rate" />
                            <label for="rate">Expected Return rate</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="year" placeholder="Year" />
                            <label for="year">Years</label>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">Calculate</button>
                            <button type="reset" className="btn btn-light">Reset</button>
                          </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>);
root.render(page);

