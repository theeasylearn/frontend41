import Menu from "./menu";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getBase, getImageBase } from "./common";
import { ToastContainer } from 'react-toastify';
import { showError, showMessage, showNetworkError } from "./message";
import { useNavigate } from "react-router-dom";
import VerifyLogin from "./verify-login";

export default function Dashboard() {
    VerifyLogin();
    let [title, setTitle] = useState("");
    let [detail, setDetail] = useState("");
    let [price, setPrice] = useState("");
    let [stock, setStock] = useState("");
    let [weight, setWeight] = useState("");
    let [size, setSize] = useState("");
    let [oldPhoto, setOldPhoto] = useState(null); //used to store photo fetched from server
    let [photo, setPhoto] = useState(null); //used to store photo selected by users
    let [isLive, setIsLive] = useState("");
    let [category, setCategory] = useState(""); //used to store selected category

    let [categories, setCategories] = useState([]); //used to store categories fetched from api.
    let [isFetched, setIsFetched] = useState(false);
    let navigate = useNavigate();
    let { id } = useParams();
    let fetchCategories = function () {
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
    }
    useEffect(() => {
        //api calling 
        if (isFetched === false) {
            let apiAddress = getBase() + "product.php?productid=" + id;
            fetch(apiAddress).then((response) => response.json()).then((data) => {
                console.log(data);
                let error = data[0]['error'];
                if (error !== 'no')
                    showError(error);
                else {
                    if (data[1]['total'] === 0)
                        showError('no product found');
                    else {
                        setTitle(data[2]['title']);
                        setCategory(data[2]['categoryid']);
                        setDetail(data[2]['detail']);
                        setIsLive(data[2]['islive']);
                        setOldPhoto(data[2]['photo']);
                        setPrice(data[2]['price']);
                        setSize(data[2]['size']);
                        setStock(data[2]['stock']);
                        setWeight(data[2]['weight']);
                        fetchCategories();
                        setIsFetched(true); //to prevent api calling

                    }
                }
            }).catch((error) => {
                alert(error);
            })
        }
    })
    let updateProduct = function (e) {
        e.preventDefault();
        console.log(category, title, price, size, weight, stock, detail, isLive, photo);
        let apiAddress = getBase() + "update_product.php";
        let form = new FormData();
        //store all the input inside form object using append method
        form.append("name", title);
        form.append("price", price);
        form.append("detail", detail);
        form.append("categoryid", category);
        form.append("islive", isLive);
        form.append("photo", photo);
        form.append("stock", stock);
        form.append("weight", weight);
        form.append("size", size);
        form.append("productid",id);
        // console.log(form);
        axios({
            url: apiAddress,
            method: 'post',
            responseType: 'json',
            data: form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            console.log(error);
            if (error !== 'no')
                showError(error);
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'no') {
                    showError(message);
                }
                else {
                    showMessage(message);
                    setTimeout(() => {
                        navigate("/product");
                    }, 2000);
                }
            }
        }).catch((error) => showNetworkError(error));
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
                                        <div className="h3">Edit Product</div>
                                        <Link to="/product" className="btn btn-primary">Back</Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-2">
                                                <b>Existing Photo</b> <br />
                                                <img src={getImageBase() + "product/" + oldPhoto} alt="photo" className="img-fluid" />
                                            </div>
                                            <div className="col-10">
                                                <form onSubmit={updateProduct}>
                                                    <div className="row mb-3">
                                                        {/* Category */}
                                                        <div className="col-md-6">
                                                            <label htmlFor="category" className="form-label">Category</label>
                                                            <select className="form-select" id="category" name="category" required>
                                                                {categories.map((item) => {
                                                                    if (item.id == category)
                                                                        return (<option value={item.id} selected>{item.title}</option>)
                                                                    else
                                                                        return (<option value={item.id}>{item.title}</option>)
                                                                })}
                                                            </select>
                                                        </div>
                                                        {/* Title */}
                                                        <div className="col-md-6">
                                                            <label htmlFor="title" className="form-label">Title</label>
                                                            <input type="text" className="form-control" id="title" name="title" required
                                                                value={title} onChange={(e) => setTitle(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        {/* Detail */}
                                                        <div className="col-12">
                                                            <label htmlFor="detail" className="form-label">Detail</label>
                                                            <textarea className="form-control" id="detail" name="detail" rows={3} required
                                                                value={detail}
                                                                onChange={(e) => setDetail(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        {/* Price */}
                                                        <div className="col-md-3">
                                                            <label htmlFor="price" className="form-label">Price</label>
                                                            <input type="number" className="form-control" id="price" name="price" step="0.01" required
                                                                value={price}
                                                                onChange={(e) => setPrice(e.target.value)} />
                                                        </div>
                                                        {/* Stock */}
                                                        <div className="col-md-3">
                                                            <label htmlFor="stock" className="form-label">Stock</label>
                                                            <input type="number" className="form-control" id="stock" name="stock" required
                                                                value={stock}
                                                                onChange={(e) => setStock(e.target.value)} />
                                                        </div>
                                                        {/* Weight */}
                                                        <div className="col-md-3">
                                                            <label htmlFor="weight" className="form-label">Weight (kg)</label>
                                                            <input type="number" className="form-control" id="weight" name="weight" step="0.01" required
                                                                value={weight}
                                                                onChange={(e) => setWeight(e.target.value)} />
                                                        </div>
                                                        {/* Size */}
                                                        <div className="col-md-3">
                                                            <label htmlFor="size" className="form-label">Size</label>
                                                            <input type="text" className="form-control" id="size" name="size" required
                                                                value={size}
                                                                onChange={(e) => setSize(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        {/* Photo */}
                                                        <div className="col-md-4">
                                                            <label htmlFor="photo" className="form-label">Photo</label>
                                                            <input type="file" className="form-control" id="photo" name="photo" required
                                                                onChange={(e) => setPhoto(e.target.files[0])} />
                                                        </div>
                                                        {/* Is Live */}
                                                        <div className="col-md-4">
                                                            <label className="form-label">Is Live</label>
                                                            <div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="radio" name="islive" id="isliveYes" value="1" required
                                                                        onChange={(e) => setIsLive(e.target.value)}
                                                                        checked={(isLive === '1')} />
                                                                    <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="radio" name="islive" id="isliveNo" value="0"
                                                                        required onChange={(e) => setIsLive(e.target.value)}
                                                                        checked={(isLive === '0')} />
                                                                    <label className="form-check-label" htmlFor="isliveNo">No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Buttons */}
                                                        <div className="col-md-4 d-grid">
                                                            <button type="submit" className="btn btn-primary">Save</button> <br />
                                                            <button type="reset" className="btn btn-dark">clear all</button>
                                                        </div>
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