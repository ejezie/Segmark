import React from 'react'

import { Link } from 'react-router-dom';

import hans from "../assets/images/hans.png";
import infobg from "../assets/images/infobg.png";
import kite from "../assets/images/kite.png";
import bulb from "../assets/images/bulb.png";

function Info() {
  return (
    <div className="information center">
      <img className="kite float2" src={kite} alt="kite" />
      <img className="infobg" src={infobg} alt="background" />
      <div className="left center">
        <div className="info-card center">
          <img className="info-icon marginb1 scale-up" src={bulb} alt="icon" />
          <div className="text marginb1">
            Need more information about us? we will love to hear from you{" "}
          </div>
          <Link to={"/contact"}>
            <div className="btn center">Get in touch</div>
          </Link>
        </div>
      </div>
      <div className="right center">
        <img className="hans" src={hans} alt="man" />
      </div>
    </div>
  );
}

export default Info