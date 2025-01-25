import { useEffect, useState } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import { getBase, getImageBase } from "./common";
export default function Category() {
//create state array 
let [categories, setCategory] = useState([]);

  //now get data from server
  useEffect(() => {
    if (categories.length === 0) {
      let apiAddress = getBase() + "category.php";
      fetch(apiAddress).then((response) => response.json()).then((data) => {
        console.log(data);
        let error = data[0]['error'];
        if(error !== 'no')
            alert(error)
          else 
          {
              let total = data[1]['total'];
              if(total === 0)
                alert('no category found');
              else 
              {
                //delete 2 object from beginning 
                data.splice(0,2);
                setCategory(data);
              }
          }
      }).catch((error) => {
          alert(error);
      });
    }
    else 
    {
        $("#myTable").DataTable();
    }
  });
  
  let Display = function (item) {
    return (<tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>
        <a href={getImageBase() + "category/" + item.photo} data-fancybox="gallery" data-caption="Sample Title">
          <img src={getImageBase() + "category/" + item.photo} alt="Photo" style={{ "max-width": "100px" }} />
        </a>
      </td>
      <td>{(item.islive === '1') ? "Yes":"No"}</td>
      <td>
        <Link className="btn btn-warning btn-sm" to="/category/edit">
          <i className="fas fa-edit" /> Edit
        </Link>
        <button className="btn btn-danger btn-sm">
          <i className="fas fa-trash-alt" /> Delete
        </button>
      </td>
    </tr>);
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
          <div className="header">
            <h1 className="header-title">
              Category management
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header text-bg-light d-flex justify-content-between">
                  <h3>Category List</h3>
                  <Link to="/category/add" className="btn btn-primary">Add Category</Link>
                </div>
                <div className="card-body">
                  <table id="myTable" className="table table-striped" width='100%'>
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Is Live</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((item) => Display(item))}
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