import { Link, useNavigate } from "react-router-dom";
import Menu from "./menu";
import { useState } from "react";
import axios from "axios";
import { getBase, getImageBase } from "./common";
import { showError, showMessage, showNetworkError } from "./message";
import { ToastContainer } from "react-toastify";
export default function AddCategory() {
  //create state variable
  let [title, setTitle] = useState('');
  let [isLive, setIsLive] = useState('');
  let [photo, setPhoto] = useState('');
  let navigate = useNavigate();
  let saveCategory = function (e) {
    console.log(title, isLive, photo);
    //api calling
    let apiAddress = getBase() + "insert_category.php";
    let form = new FormData();
    form.append("title", title);
    form.append("islive", isLive);
    form.append("photo", photo);

    axios({
      method: 'post',
      responseType: 'json',
      url: apiAddress,
      data: form
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no')
        showError(error);
      else {
        let success = response.data[1]['success'];
        if (success === 'yes') {
          showMessage(response.data[2]['message']);
          setTimeout(() => {
            navigate('/category');
          },2000);
        }
        else
          showError(response.data[2]['message'])
      }
    }).catch((error) => showNetworkError(error));
    e.preventDefault();
  }
  return (<div className="wrapper">
    <Menu />
    <div className="main">
      <nav className="navbar navbar-expand navbar-theme">
        <a className="sidebar-toggle d-flex me-2" style={{ "margin-top": "10px" }}>
          <i className="hamburger align-self-center" />
        </a>
      </nav>
      <main className="content">
        <div className="container-fluid">
          <ToastContainer />
          <div className="header">
            <h1 className="header-title">
              Category management
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header text-bg-light d-flex justify-content-between">
                  <div className="h3">Add Category</div>
                  <Link to="/category" className="btn btn-primary">Back</Link>
                </div>
                <div className="card-body">
                  <form onSubmit={saveCategory}>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">Title</label>
                      <input type="text" className="form-control" id="title" name="title" required
                        value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Is Live</label>
                      <div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" id="isliveYes" name="islive" value="1" required onChange={(e) => setIsLive(e.target.value)} />
                          <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" id="isliveNo" name="islive" value="0" required onChange={(e) => setIsLive(e.target.value)} />
                          <label className="form-check-label" htmlFor="isliveNo">No</label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="photo" className="form-label">Photo</label>
                      <input className="form-control" type="file" id="photo" name="photo" required
                        onChange={(e) => setPhoto(e.target.files[0])} />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary">Save</button>
                      <button type="reset" className="btn btn-dark">clear all</button>
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