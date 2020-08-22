import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import './Nav.css'; 

function Nav ({ currentUser, logout }) {
    return (
        <nav>
            {/* LOGO */}
            <div className="nav-container">
                <h2 className="logo">Audiophile</h2>
            </div>
            {/* NAV LIST */}
            <div className="nav-container">
            <ul className="nav-list">
                {/* HOME */}
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/'>Home</NavLink>
                </li>
                {/* LOGIN */}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                {/* REGISTE */}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">register</NavLink>
                </li>
            </ul>
            </div>
        </nav>
    )
}; 

export default Nav; 
