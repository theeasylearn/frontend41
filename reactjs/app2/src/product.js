import Menu from "./menu";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getBase, getImageBase } from "./common";
import $ from "jquery";
import "datatables.net";
import { showError, showMessage, showNetworkError } from "./message";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import VerifyLogin from "./verify-login";

export default function Dashboard() {
  //create empty state array
  VerifyLogin();
  let [products, setProduct] = useState([]);

  useEffect(() => {
    //code we write in this block will execute after return statement execute.
    //it is used to call api (fetch/upload data from server)
    if (products.length === 0) {
      let apiAddress = getBase() + "product.php";
      fetch(apiAddress).then((response) => response.json()).then((data) => {
        console.log(data);
        let error = data[0]['error'];
        if (error !== 'no')
          alert(error);
        else {
          if (data[1]['total'] === 0)
            alert('no product found');
          else {
            data.splice(0, 2); //delete 2 object from beginning
            setProduct(data);
          }
        }
      }).catch((error) => {
        alert(error);
      })
    }
    else {
      $("#myTable").DataTable();
    }
  });
  let deleteProduct = function (itemID) {
    //alert(itemID);
    //remove product on server.
    let apiAddress = getBase() + "delete_product.php?id=" + itemID;
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no') {
        showError(error);
      }
      else {
        let temp = products.filter((item) => {
            if(item.id !== itemID)
                return item;
        });
        setProduct(temp);
        showMessage('product removed....');
      }
    }).catch((error) => {
      showNetworkError(error);
    });

  }
  let Display = function (item) {
    return (<tr>
      <td>{item.id}</td>
      <td>
        {item.title}
        <br />
        <span className="fa fa-tags" /> ({item.categorytitle})
      </td>
      <td>
        <a href={getImageBase() + "product/" + item.photo} data-fancybox="gallery" data-caption="Sample Title">
          <img src={getImageBase() + "product/" + item.photo} alt="Photo" style={{ "max-width": "100px" }} />
        </a>
      </td>
      <td>Rs {item.price}</td>
      <td>{item.stock}</td>
      <td>{(item.islive === '1') ? "Yes" : "No"}</td>
      <td>
        <Link className="btn btn-warning "
          to={"/product/edit/" + item.id}>
          <i className="fas fa-edit" />
        </Link>
        <button className="btn btn-danger" onClick={(e) => deleteProduct(item.id)}>
          <i className="fas fa-trash-alt" />
        </button>
        <Link className="btn btn-warning " to={"/product/view/" + item.id}>
          <i className="fas fa-eye"></i>
        </Link>
      </td>
    </tr>)
  }
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
            <ToastContainer />
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
                    <Link to="/product/add" className="btn btn-primary">Add Product</Link>
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
                        {products.map((item) => Display(item))}
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