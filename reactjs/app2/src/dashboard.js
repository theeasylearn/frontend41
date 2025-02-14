import Menu from "./menu";
import { useEffect, useState } from "react";
import { getBase,FILE_NAME } from "./common";
import { showNetworkError, showError } from "./message";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import VerifyLogin from "./verify-login";
export default function Dashboard() {
    let [summery, setSummery] = useState({});
    VerifyLogin();  
    useEffect(() => {
        if (summery.orders === undefined) {
            let apiAddress = getBase() + "summery.php";
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
                    setSummery(response.data[1]);
                }
            }).catch((error) => showNetworkError(error));
        }
    });
    
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
                        <div className="header">
                            <h1 className="header-title">
                                Business Overview
                            </h1>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-3 col-xl">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Total Orders</h5>
                                            </div>
                                            <div className="col-auto">
                                                <div className="avatar">

                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="display-5 mt-1 mb-3">{summery.orders}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Prtoducts</h5>
                                            </div>
                                            <div className="col-auto">
                                                <div className="avatar">
                                                    <div className="avatar-title rounded-circle bg-primary-dark">
                                                        <i className="align-middle" data-feather="shopping-cart" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="display-5 mt-1 mb-3">{summery.products}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Customers</h5>
                                            </div>
                                            <div className="col-auto">
                                                <div className="avatar">
                                                    <div className="avatar-title rounded-circle bg-primary-dark">
                                                        <i className="align-middle" data-feather="activity" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="display-5 mt-1 mb-3">{summery.users}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Category</h5>
                                            </div>
                                            <div className="col-auto">
                                                <div className="avatar">
                                                    <div className="avatar-title rounded-circle bg-primary-dark">
                                                        <i className="align-middle" data-feather="dollar-sign" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="display-5 mt-1 mb-3">{summery.categories}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <div className="card text-bg-primary">
                                    <div className="card-body">
                                        <h3 className="text-white">Weekly order {summery.weekly}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card text-bg-info">
                                    <div className="card-body">
                                        <h3 className="text-white">monthly order {summery.monthly}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card text-bg-warning">
                                    <div className="card-body">
                                        <h3 className="text-white">Yearly Order {summery.yearly}</h3>
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