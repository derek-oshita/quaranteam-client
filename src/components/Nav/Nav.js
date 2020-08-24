import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import './Nav.css'; 

function Nav ({ currentUser, logout }) {
    return (
        <nav>
            {/* LOGO */}
            <div className="nav-container">
                <NavLink className="nav-link" exact to='/'>
                    <h2 className="logo">Audiophile</h2>
                </NavLink>
            </div>
            {/* NAV LIST */}
            <div className="nav-container">
            <ul className="nav-list">
                {/* HOME */}
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/'>Home</NavLink>
                </li>

            {currentUser && (
            <React.Fragment>
                {/* EVENTS */}
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/events'>Events</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" onClick={logout}>Logout</NavLink>
                </li>
            </React.Fragment>
            )}

            {!currentUser && (
            <React.Fragment>
                {/* LOGIN */}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                {/* REGISTER */}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
            </React.Fragment>
            )}
     
            </ul>
            </div>
        </nav>
    )
}; 

export default Nav; 
