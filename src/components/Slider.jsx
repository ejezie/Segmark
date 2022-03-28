import React from "react";
import { NavLink } from "react-router-dom";

function Slider({ drawer, handleMenuClick }) {
  return (
    <div className={`slider ${drawer && "drawer"}`}>
      <div className="slider-wrap center">
        <NavLink to={"/features"}>Features</NavLink>
        <NavLink to={"/pricing"}>Pricing</NavLink>
        <NavLink to={""}>Contact</NavLink>
        <NavLink to={""}>About us</NavLink>
        <NavLink to={""}>Blog</NavLink>
        <NavLink className="btn center" to={""}>
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
