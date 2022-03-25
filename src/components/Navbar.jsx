import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ handleMenuClick, }) {
  return (
    <div className="navbar center">
      <div className="logo center">
        <div className="logo-icon">LOGO</div>
        <div className="bar" onClick={handleMenuClick}>
          Burgr
        </div>
      </div>
      <div className={`links center`}>
        <NavLink to={""}>Features</NavLink>
        <NavLink to={""}>Pricing</NavLink>
        <NavLink to={""}>Contact</NavLink>
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
