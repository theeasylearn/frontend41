import ReactDOM from 'react-dom/client';
import React from 'react';
class MyMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }
  //arrow function
  doLogin = () => {
    this.setState({ isLogin: true })
  }
  doLogout = () => {
    this.setState({ isLogin: false })
  }

  render() {
    let UserSection = <>
      <li className="nav-item">
        <a className="nav-link" href="#">Cart</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Checkout</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={this.doLogout}>Logout</a>
      </li>
    </>
    let GuestSection = <>
      <li className="nav-item">
        <a className="btn btn-primary" href="#" onClick={this.doLogin}>Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Register</a>
      </li>
    </>
    return (<nav className="navbar navbar-expand-xl navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Shop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse show" id="navbarBasic">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shop</a>
            </li>
            {this.state.isLogin==true && UserSection }
            {this.state.isLogin==false && GuestSection }
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyMenu />);