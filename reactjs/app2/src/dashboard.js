import Menu from "./menu";

export default function Dashboard() {
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
                                                    <div className="avatar-title rounded-circle bg-primary-dark h3">
                                                        ₹
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="display-5 mt-1 mb-3">15000</h1>
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
                                        <h1 className="display-5 mt-1 mb-3">111</h1>
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
                                        <h1 className="display-5 mt-1 mb-3">5000</h1>
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
                                        <h1 className="display-5 mt-1 mb-3">9</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <div className="card text-bg-primary">
                                    <div className="card-body">
                                        <h3 className="text-white">Weekly order 10</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card text-bg-info">
                                    <div className="card-body">
                                        <h3 className="text-white">monthly order 300</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card text-bg-warning">
                                    <div className="card-body">
                                        <h3 className="text-white">Yearly Order 3499</h3>
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