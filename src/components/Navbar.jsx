import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../assets/icons/logo.png";
import menu from "../assets/icons/menu.png";

function Navbar({ handleMenuClick, }) {
  return (
    <div className="navbar center">
      <div className="logo center">
        <div className="logo-icon">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="bar" onClick={handleMenuClick}>
          <img src={menu} alt="menu" />
        </div>
      </div>
      <div className={`links center`}>
        <NavLink to={"/features"}>Features</NavLink>
        <NavLink to={"/pricing"}>Pricing</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={""}>About us</NavLink>
        <NavLink to={""}>Blog</NavLink>
        <NavLink className="btn center" to={""}>
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
