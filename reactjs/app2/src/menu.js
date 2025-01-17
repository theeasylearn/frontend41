export default function Menu()
{
    return (<nav id="sidebar" className="sidebar">
        <a className="sidebar-brand" href="index.html">
          <svg>
            <use xlinkHref="#ion-ios-pulse-strong" />
          </svg>
          Admin - Online shop 
        </a>
        <div className="sidebar-content">
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a className="sidebar-link" href="tables-bootstrap.html">
                <i className="align-middle me-2 fas fa-fw fa-list" /> <span className="align-middle">Menu Item</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>);
}