import { useEffect, useState } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getBase, getImageBase } from "./common";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage, showNetworkError } from "./message";
export default function Dashboard() {
  //create variable using useParam
  let { id } = useParams();
  console.log(id);
  //create state array
  let [product, setProduct] = useState(null);
  useEffect(() => {
    //used to call api 
    if (product === null) {
      let apiAddress = getBase() + "product.php?productid=" + id;
      axios({
        url: apiAddress,
        responseType: 'json',
        method: 'get'
      }).then((response) => {
        console.log(response.data);
        let error = response.data[0]['error'];
        if (error !== 'no')
          showError(error)
        else {
          let total = response.data[1]['total'];
          if (total === 0)
            showError('no product detail found');
          else {
            //delete 1st 2 objects
            response.data.splice(0, 2);
            setProduct(response.data[0]);
          }
        }

      }).catch((error) => showNetworkError(error));
    }
  })
  return (
    (product === null)?"":<div className="wrapper">
    <Menu />
    <div className="main">
      <nav className="navbar navbar-expand navbar-theme">
        <a className="sidebar-toggle d-flex me-2" style={{ "margin-top": "10px" }}>
          <i className="hamburger align-self-center" />
        </a>
      </nav>
      <main className="content">
        <ToastContainer />
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
                      <img src={getImageBase() + "product/" + product.photo} alt="photo" className="img-fluid" />
                    </div>
                    <div className="col-9">
                      <table className="table table-sm table-bordered table-striped">
                        <tbody><tr>
                          <td width="25%" className="fw-bold">Id</td>
                          <td>{product.id}</td>
                        </tr>
                          <tr>
                            <td width="25%" className="fw-bold">Category</td>
                            <td>{product.categorytitle}</td>
                          </tr>
                          <tr>
                            <td width="25%" className="fw-bold">Price</td>
                            <td>{product.price}</td>
                          </tr>
                          <tr>
                            <td width="25%" className="fw-bold">Weight</td>
                            <td>{product.weight}</td>
                          </tr>
                          <tr>
                            <td width="25%" className="fw-bold">Size</td>
                            <td>{product.size}</td>
                          </tr>
                          <tr>
                            <td width="25%" className="fw-bold">Detail</td>
                            <td>{product.detail}</td>
                          </tr>
                          <tr>
                            <td width="25%" className="fw-bold">is Live</td>
                            <td>{(product.isLive === '1')?"Yes":"No"}</td>
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