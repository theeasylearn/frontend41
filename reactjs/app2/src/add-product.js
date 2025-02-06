import Menu from "./menu";
import { useEffect, useState } from "react";
import axios from "axios";
import { getBase, getImageBase } from "./common";
import { ToastContainer } from 'react-toastify';
import { showError, showMessage, showNetworkError } from "./message";

export default function AddProduct() {
  let [title, setTitle] = useState("");
  let [detail, setDetail] = useState("");
  let [price, setPrice] = useState("");
  let [stock, setStock] = useState("");
  let [weight, setWeight] = useState("");
  let [size, setSize] = useState("");
  let [photo, setPhoto] = useState(null);
  let [isLive, setIsLive] = useState("");
  let [category, setCategory] = useState(""); //used to store selected category

  let [categories, setCategories] = useState([]); //used to store categories fetched from api.
  useEffect(() => {
    if (categories.length === 0) {

      let apiAddress = getBase() + "category.php";
      fetch(apiAddress).then((response) => response.json()).then((data) => {
        console.log(data);
        let error = data[0]['error'];
        if (error !== 'no')
          showError(error)
        else {
          let total = data[1]['total'];
          if (total === 0)
            showError('no category found');
          else {
            //delete 2 object from beginning 
            data.splice(0, 2);
            setCategories(data);
          }
        }
      }).catch((error) => {
        showError(error);
      });
    }
  });
  let saveProduct = function (e) {
  
    console.log(category,
      title,
      detail,
      price,
      stock,
      weight,
      size,
      photo,
      isLive);

    let apiAddress = getBase() + "insert_product.php";
    let form = new FormData();
    //store all the input inside form object using append method
    form.append("name",title);
    form.append("photo",photo);
    form.append("price",price);
    form.append("stock",stock);
    form.append("detail",detail);
    form.append("categoryid",category);
    form.append("weight",weight);
    form.append("size",size);
    form.append("isLive",isLive);
    console.log(form);
    axios({
      url: apiAddress,
      method: 'post',
      responseType: 'json',
      data:form
    }).then((response) => {
        console.log(response.data);
        let error = response.data[0]['error'];
        console.log(error);
        if(error !== 'no')
          showError(error);
        else 
        {
           let success = response.data[1]['success'];
           let message = response.data[2]['message'];
           if(success === 'no')
           {
              showError(message);
           } 
           else 
           {
              showMessage(message);
           }
        }
    }).catch((error) => showNetworkError(error));
    e.preventDefault();
  }
  return (
    <div className="wrapper">
      <Menu />
      <div className="main">
        <nav className="navbar navbar-expand navbar-theme">
          <a className="sidebar-toggle d-flex me-2" style={{ marginTop: "10px" }}>
            <i className="hamburger align-self-center" />
          </a>
        </nav>
        <main className="content">
          <div className="container-fluid">
            <ToastContainer />
            <div className="header">
              <h1 className="header-title">Product management</h1>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header text-bg-light d-flex justify-content-between">
                    <div className="h3">Add Product</div>
                    <a href="admin-product.html" className="btn btn-primary">Back</a>
                  </div>
                  <div className="card-body">
                    <form onSubmit={saveProduct}>
                      <div className="row mb-3">
                        {/* Category */}
                        <div className="col-md-6">
                          <label htmlFor="category" className="form-label">Category</label>
                          <select
                            className="form-select"
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                          >
                            <option value="" >Choose a category</option>
                            {categories.map((item) => {
                              return (<option value={item.id}>{item.title}</option>)
                            })}
                          </select>
                        </div>
                        {/* Title */}
                        <div className="col-md-6">
                          <label htmlFor="title" className="form-label">Title</label>
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        {/* Detail */}
                        <div className="col-12">
                          <label htmlFor="detail" className="form-label">Detail</label>
                          <textarea
                            className="form-control"
                            id="detail"
                            name="detail"
                            rows={3}
                            value={detail}
                            onChange={(e) => setDetail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        {/* Price */}
                        <div className="col-md-3">
                          <label htmlFor="price" className="form-label">Price</label>
                          <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            step="0.01"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                          />
                        </div>
                        {/* Stock */}
                        <div className="col-md-3">
                          <label htmlFor="stock" className="form-label">Stock</label>
                          <input
                            type="number"
                            className="form-control"
                            id="stock"
                            name="stock"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                          />
                        </div>
                        {/* Weight */}
                        <div className="col-md-3">
                          <label htmlFor="weight" className="form-label">Weight (kg)</label>
                          <input
                            type="number"
                            className="form-control"
                            id="weight"
                            name="weight"
                            step="0.01"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                          />
                        </div>
                        {/* Size */}
                        <div className="col-md-3">
                          <label htmlFor="size" className="form-label">Size</label>
                          <input
                            type="text"
                            className="form-control"
                            id="size"
                            name="size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        {/* Photo */}
                        <div className="col-md-4">
                          <label htmlFor="photo" className="form-label">Photo</label>
                          <input
                            type="file"
                            className="form-control"
                            id="photo"
                            name="photo"
                            onChange={(e) => setPhoto(e.target.files[0])}
                            required
                          />
                        </div>
                        {/* Is Live */}
                        <div className="col-md-4">
                          <label className="form-label">Is Live</label>
                          <div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="islive"
                                id="isliveYes"
                                value="yes"
                                checked={isLive === "yes"}
                                onChange={(e) => setIsLive(e.target.value)}
                                required
                              />
                              <label className="form-check-label" htmlFor="islive">Yes</label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="islive"
                                id="isliveNo"
                                value="no"
                                checked={isLive === "no"}
                                onChange={(e) => setIsLive(e.target.value)}
                                required
                              />
                              <label className="form-check-label" htmlFor="isliveNo">No</label>
                            </div>
                          </div>
                        </div>
                        {/* Buttons */}
                        <div className="col-md-4 d-grid">
                          <button type="submit" className="btn btn-primary">Save</button> <br />
                          <button type="reset" className="btn btn-dark" onClick={() => {
                            setCategory("");
                            setTitle("");
                            setDetail("");
                            setPrice("");
                            setStock("");
                            setWeight("");
                            setSize("");
                            setPhoto(null);
                            setIsLive("");
                          }}>Clear All</button>
                        </div>
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