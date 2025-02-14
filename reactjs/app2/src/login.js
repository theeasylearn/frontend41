import { useState } from "react";
import axios from "axios";
import { getBase, getImageBase, FILE_NAME } from "./common";
import { ToastContainer } from 'react-toastify';
import { showError, showMessage, showNetworkError } from "./message";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useCookies}  from 'react-cookie';
export default function Login() {
  const [cookies, setCookie, removeCookie] = useCookies(FILE_NAME);
  let verifyAccess = function (e) {
    e.preventDefault();
    console.log(email, password);


    let apiAddress = getBase() + "admin_login.php";
    let form = new FormData();
    form.append('email', email);
    form.append('password', password);

    axios({
      url: apiAddress,
      responseType: 'json',
      method: 'post',
      data: form
    }).then((response) => {
      // in case of successful login 
      // [{"error":"no"},{"success":"yes"},{"message":"login successful"},{"id":"2"}]

      // in case of unsuccessful login attempt 
      //[{"error":"no"},{"success":"no"},{"message":"invalid login attempt"}]

      //in case of input is not given
      //[{"error":"input is missing"}]
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no')
        showError(error);
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];

        if (success === 'no')
          showError(message);
        else {
          showMessage(message);
          let id = response.data[3]['id'];
          console.log(id);
          setCookie('id',id);
          //console.log('admin id ',cookies['id']);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      }
    }).catch((error) => {
      showNetworkError(error);
    });
  }
  //create state variable to store input
  let [email, SetEmail] = useState('');
  let [password, setPassword] = useState('');
  let navigate = useNavigate();
  return (<div>

    <main className="main h-100 w-100">
      <div className="container h-100">
        <ToastContainer />
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
                    <form onSubmit={verifyAccess}>
                      <div className="mb-3">
                        <label>Email</label>
                        <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email"
                          value={email} onChange={(e) => SetEmail(e.target.value)} />
                      </div>
                      <div className="mb-3">
                        <label>Password</label>
                        <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password"
                          value={password} onChange={(e) => setPassword(e.target.value)} />
                        <small>
                          <Link to="/forgot-password">Forgot password?</Link>
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