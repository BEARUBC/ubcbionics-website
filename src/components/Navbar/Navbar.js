import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css'


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-logo">
            UBC BIONICS<i className="fab fa-react"></i>
          </h1>
          <div className="menu-icon"></div>
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={MenuItems.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
