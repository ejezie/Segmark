import React from "react";

import { Link } from "react-router-dom";

import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import phone from "../assets/icons/phone.png";
import message from "../assets/icons/message.png";
import logo from "../assets/icons/logo.png";


function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap center">
        <div className="block1 center">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="text" style={{ marginBottom: "1rem" }}>
            <span style={{ fontWeight: "600", color: "black" }}> Segmak</span>{" "}
            is a school management system that has unique features to enhance
            learning.
          </div>
          <div className="img-wrap center">
            <div className="icon center">
              <img src={facebook} alt="icon" />
            </div>
            <div className="icon center">
              <img src={twitter} alt="icon" />
            </div>
            <div className="icon center">
              <img src={instagram} alt="icon" />
            </div>
          </div>
        </div>
        <div className="block2 center">
          <div className="footer-header marginb1">Contact Us</div>
          <div className="icon-wrap center marginb1">
            <img src={phone} alt="icon" />
            <div className="text">+234 8136082400</div>
          </div>
          <div className="icon-wrap center">
            <img src={message} alt="icon" />
            <div className="text">hello@segmak.com</div>
          </div>
        </div>
        <div className="block center">
          <div className="footer-header marginb1">The Company</div>
          <div className="text marginb1">About Us</div>
          <div className="text marginb1">Blog</div>
          <div className="text">Pricing</div>
        </div>
        <div className="block center">
          <div className="footer-header marginb1">Privacy</div>
          <div className="text marginb1">Blog</div>
          <div className="text">Terms & Conditions</div>
        </div>
      </div>
      <div className="text">© 2022 Segmak All Rights Reserved</div>
    </div>
  );
}

export default Footer;
