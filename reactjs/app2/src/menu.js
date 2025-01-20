import { Link } from "react-router-dom";
export default function Menu()
{
    return (<nav id="sidebar" className="sidebar">
        <Link className="sidebar-brand" to="index.html">
          <svg>
            <use xlinkhref="#ion-ios-pulse-strong" />
          </svg>
          Admin - Online shop 
        </Link>
        <div className="sidebar-content">
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/dashboard">
                <i className="align-middle me-2 fas fa-fw fa-list" /> <span className="align-middle">Dashboard</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/orders">
                <i className="align-middle me-2 fas fa-fw fa-list" /> <span className="align-middle">Orders</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/users">
                <i className="align-middle me-2 fas fa-fw fa-list" /> <span className="align-middle">Users</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/product">
                <i className="align-middle me-2 fas fa-fw fa-list" /> <span className="align-middle">Products</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/category">
                <i className="align-middle me-2 fas fa-fw fa-list" /> <span className="align-middle">Categories</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/change-password">
                <i className="align-middle me-2 fas fa-fw fa-list" /> <span className="align-middle">Change password</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/logout">
                <i className="align-middle me-2 fas fa-fw fa-list" /> <span className="align-middle">Logout</span>
              </Link>
            </li>

            
          </ul>
        </div>
      </nav>);
}