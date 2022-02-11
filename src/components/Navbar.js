import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import './Navbar.css'


export const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-logo">
            <img src="bionicslogo.png" width="60" height="60" />
          </h1>
          <div className="menu-icon"></div>
          <ul class="navigation">
            <li class="item">
              <Link to="/">HOME</Link>
            </li>
            <li class="item">
              <Link to="/grasp">GRASP</Link>
            </li>
            <li class="item">
              <Link to="/teams">TEAMS</Link>
            </li>
            <li class="item">
              <Link to="/join">JOIN US</Link>
            </li>
            <li class="item">
              <Link to="/sponsor">SPONSORS</Link>
            </li>
            <li class="item">
              <Link to="/contactform" href="#">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

// export const Navbar;
