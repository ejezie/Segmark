import React from "react";

import bulb from "../assets/images/bulb.png";
import hans from "../assets/images/hans.png";
import girl from "../assets/images/girl.png";
import phone from "../assets/icons/phone.png";
import message from "../assets/icons/message.png";
import infobg from "../assets/images/infobg.png";
import kite from "../assets/images/kite.png";

function Contact() {
  return (
    <div className="section-wrapper">
      <div className="contact center">
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
      <div className="info-wrap">
        <div className="information center" style={{ marginTop: "0" }}>
          <img className="kite" src={kite} alt="kite" />
          <img className="infobg" src={infobg} alt="background" />
          <div className="left center">
            <div className="info-card center">
              <img className="info-icon marginb1" src={bulb} alt="icon" />
              <div className="text marginb1">
                Need more information about us? we will love to hear from you{" "}
              </div>
              <div className="btn center">Get in Touch</div>
            </div>
          </div>
          <div className="right center">
            <img className="hans" src={hans} alt="man" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
