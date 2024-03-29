// IMPORTS
import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.less";
import About from "../../components/About/About";

// NAV
function Nav({ currentUser, logout }) {
  return (
    <nav>
      {/* LOGO */}
      <div className="nav-container">
        <NavLink className="nav-link" exact to="/">
          <h2 className="logo">Quaranteam</h2>
        </NavLink>
      </div>
      {/* NAV LIST */}
      <div className="nav-container">
        <ul className="nav-list">
          {/* HOME */}
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          {/* LOGGED IN */}
          {currentUser && (
            <React.Fragment>
              {/* EVENTS */}
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/states">
                  State Data
                </NavLink>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={logout}>
                  Logout
                </span>
              </li>
            </React.Fragment>
          )}
          {/* NOT LOGGED IN */}
          {!currentUser && (
            <React.Fragment>
              {/* LOGIN */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              {/* REGISTER */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
}

// EXPORTS
export default Nav;
