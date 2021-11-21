import { React } from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="nav-link" to="/home">
            <em class="bi bi-bank2"></em> Bank Management System
          </NavLink>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
