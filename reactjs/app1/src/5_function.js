import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// 
const root = ReactDOM.createRoot(document.getElementById('root'));
//create user defined function 
function InputBox(Item) {
  let output = (<div className="form-floating mb-3">
    <input type="number" className="form-control" id={Item.name} placeholder={Item.message} />
    <label for="amount">{Item.message}</label>
  </div>)
  return output;
}
function SIPCalculator() {
  //create object
  let amount = {
    name: 'amount',
    message: 'Monthly Investment'
  }
  let rate = {
    name: 'rate',
    message: 'Expected Return Rate'
  }
  let year = {
    name: 'year',
    message: 'Year'
  }
  let page = (<div className="container">
    <div className="row">
      <div className="col-lg-6 offset-3">
        <div className="card shadow">
          <div className="card-header text-bg-primary">
            <h2>S.I.P Calculator</h2>
          </div>
          <div className="card-body">
            <form action="">
              {InputBox(amount)}
              {InputBox(rate)}
              {InputBox(year)}
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
  return page;
}
root.render(SIPCalculator());

