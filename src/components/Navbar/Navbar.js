import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import './Navbar.css'


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-logo">
            <img src="bionicslogo.png" width="60" height="60" />

            <i className="fab fa-react"></i>
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
              <a href="#">TEAMS</a>
            </li>
            <li class="item">
              <a href="#">JOIN US</a>
            </li>
            <li class="item">
              <a href="#">SPONSORS</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
