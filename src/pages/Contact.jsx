import React from "react";

import Info from "../components/Info";

import girl from "../assets/images/girl.png";
import phone from "../assets/icons/phone.png";
import message from "../assets/icons/message.png";
import p1 from "../assets/images/p1.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";


function Contact() {
  return (
    <div className="section-wrapper">
      <div className="contact center">
        <img className="p1" src={p1} alt="clip" />
        <img className="p4" src={p4} alt="clip" />
        <img className="p5" src={p5} alt="clip" />
        <div className="sub-heading">Contact</div>
        <div className="contact-wrap center">
          <div className="left center">
            <div className="img-wrap">
              <img className="girl" src={girl} alt="girl" />
            </div>
            <div className="icons-wrap center">
              <div className="wrap center">
                <img src={phone} alt="icon" />
                <div className="text">+234 8136082400</div>
              </div>
              <div className="wrap center">
                <img src={message} alt="icon" />
                <div className="text">hello@segmak.com</div>
              </div>
            </div>
          </div>
          <div className="right center">
            <form action="" className="form center">
              <div className="form-header">We will love to hear from you</div>
              <div className="input-wrap center">
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" />
              </div>
              <div className="input-wrap center">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
              </div>
              <div className="input-wrap center">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="btn-wrap center">
                <div className="btn center">Send Message</div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Info Section */}
      <Info />
    </div>
  );
}

export default Contact;
