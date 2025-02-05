import Menu from "./menu";
import { useState } from "react";
import axios from "axios";
export default function AddProduct() {
  let [category, setCategory] = useState("");
  let [title, setTitle] = useState("");
  let [detail, setDetail] = useState("");
  let [price, setPrice] = useState("");
  let [stock, setStock] = useState("");
  let [weight, setWeight] = useState("");
  let [size, setSize] = useState("");
  let [photo, setPhoto] = useState(null);
  let [isLive, setIsLive] = useState("");

  let saveProduct = function (e)
  {
      e.preventDefault();
      console.log( category,
        title,
        detail,
        price,
        stock,
        weight,
        size,
        photo,
        isLive);
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
                            <option value="" disabled>Choose a category</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="home">Home</option>
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
                              <label className="form-check-label" htmlFor="isliveYes">Yes</label>
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