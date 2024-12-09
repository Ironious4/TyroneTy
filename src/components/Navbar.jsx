import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    
    return (
        <nav>
        <h1 className="title">Tyrone Ty</h1>
        <NavLink
        to="/"
        className="navbar"
        >
        Home
        </NavLink>
        <NavLink
        to="/about"
        className="navbar"
        >
        About
        </NavLink>
        <NavLink
        to="/contact"
        className="navbar"
        >
        Contact
        </NavLink>
        </nav>
    )
}

export default Navbar;