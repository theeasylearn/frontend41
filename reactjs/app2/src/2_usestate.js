import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function Login()
{
    //create state variable
    var [email,setEmail] = useState('');
    var [password,setPassword] = useState('');
    let doLogin = function(e)
    {
        e.preventDefault();
        console.log(email,password);
        if(email === 'theeasylearn@gmail.com' && password === '123123')
        {
           alert('login successfull');
        }
        else 
        {
          alert('invalid login attempt')
        }
    }
    return(<div className="container">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card shadow">
            <div className="card-header text-bg-primary">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form action="" method="post" onSubmit={doLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email"
                  value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input id="password" type="password" name="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary" type="submit">Login</button>
                  <button className="btn btn-light" type="reset">clear all</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);