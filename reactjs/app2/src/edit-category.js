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
                                Category management
                            </h1>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header text-bg-light d-flex justify-content-between">
                                        <div className="h3">Edit Category</div>
                                        <a href="admin-category.html" className="btn btn-primary">Back</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <b>Existing Photo</b> <br />
                                                <img src="https://via.placeholder.com/150" alt="photo" className="img-fluid" />
                                            </div>
                                            <div className="col-lg-10">
                                                <form>
                                                    <div className="mb-3">
                                                        <label htmlFor="title" className="form-label">Title</label>
                                                        <input type="text" className="form-control" id="title" name="title" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="detail" className="form-label">Detail</label>
                                                        <textarea className="form-control" id="detail" name="detail" rows={3} required defaultValue={""} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Is Live</label>
                                                        <div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" id="isliveYes" name="islive" defaultValue="yes" required />
                                                                <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" id="isliveNo" name="islive" defaultValue="no" required />
                                                                <label className="form-check-label" htmlFor="isliveNo">No</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="photo" className="form-label">Photo</label>
                                                        <input className="form-control" type="file" id="photo" name="photo" required />
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