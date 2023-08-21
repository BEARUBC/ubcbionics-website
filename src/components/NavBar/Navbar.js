import "./Navbar.css";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import logo from "./logo.png";

export const Navbar = () => {
  return (
    <div class="nav">
      <div class="logo">
        <img
          class="mainLogo img-responsive center-block d-block mx-auto"
          src={logo}
        />
        <a href="/">UBC BIONICS</a>
      </div>

      <Navigation />
      <MobileNavigation />
    </div>
  );
};
