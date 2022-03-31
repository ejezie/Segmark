import React from "react";
import { NavLink } from "react-router-dom";

function Slider({ drawer, handleMenuClick }) {
  return (
    <div className={`slider ${drawer && "drawer"}`}>
      <div className="slider-wrap center">
        <NavLink to={"/features"}>Features</NavLink>
        <NavLink to={"/pricing"}>Pricing</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/about"}>About us</NavLink>
        <NavLink to={"blog"}>Blog</NavLink>
        <NavLink className="btn center" to={"/signup"}>
          Sign Up
        </NavLink>
        <div onClick={handleMenuClick} className="cancel">
          x
        </div>
      </div>
    </div>
  );
}

export default Slider;
