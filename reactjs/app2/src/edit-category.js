import Menu from "./menu";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getBase, getImageBase } from "./common";
import { showError, showMessage, showNetworkError } from "./message";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
export default function Dashboard() {
    var {id} = useParams();
    //create property variable for each and every input. 
    let [title,setTitle] = useState('');
    let [photo,setPhoto] = useState(''); //used to store user select photo
    let [isLive,setIsLive] = useState('');
    let [oldPhoto,setOldPhoto] = useState(''); //used to store old photo'
    let [isFetched,setIsFetched] = useState(false); //used to store old photo
    let navigate = useNavigate();
    let updateCategory = function(e) 
    {
        console.log(title,photo,isLive);
        e.preventDefault(); 
        let apiAddress = getBase() + "update_category.php";
        let form = new FormData();
        form.append("title",title);
        form.append("photo",photo);
        form.append("islive",isLive);
        form.append("id",id);

        axios({
            method:'post',
            responseType:'json',
            url:apiAddress,
            data:form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error !== 'no')
            {
                showError(error);
            }    
            else 
            {
                showMessage(response.data[2]['message']);
                setTimeout(() => {
                    //current screen should be replaced by category
                    navigate("/category");
                },2000);
            }
        }).catch((error) => showNetworkError(error));
    }
    useEffect(() => {
        //api calling to fetch only particular category id
        if (isFetched === false) {

            let apiAddress = getBase() + "category.php?id=" + id;
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
                    setTitle(data[2]['title']);
                    setOldPhoto(data[2]['photo']);
                    setIsLive(data[2]['islive']);
                    setIsFetched(true);
                }
              }
            }).catch((error) => {
              showError(error);
            });
          }
    })
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
                                Category management
                            </h1>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header text-bg-light d-flex justify-content-between">
                                        <div className="h3">Edit Category</div>
                                        <Link to="/category" className="btn btn-primary">Back</Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <b>Existing Photo</b> <br />
        <img src={getImageBase() + "category/" + oldPhoto} alt="photo" className="img-fluid" />
                                            </div>
                                            <div className="col-lg-10">
                                                <form onSubmit={updateCategory}>
                                                    <div className="mb-3">
                                                        <label htmlFor="title" className="form-label">Title</label>
<input type="text" className="form-control" id="title" name="title" 
required value={title} onChange={(e) => setTitle(e.target.value)} />
                                                    </div>
                                                   
                                                    <div className="mb-3">
                                                        <label className="form-label">Is Live</label>
                                                        <div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" id="isliveYes" name="islive" value="1" required
                                                                onChange={(e) => setIsLive(e.target.value)} checked={(isLive === '1')} />
                                                                <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" id="isliveNo" name="islive" value="0" required
                                                                onChange={(e) => setIsLive(e.target.value)} checked={(isLive === '0')} />
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