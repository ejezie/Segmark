import React from "react";
import { Link } from "react-router-dom";

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import hans from "../assets/images/hans.png";
import infobg from "../assets/images/infobg.png";
import kite from "../assets/images/kite.png";
import bulb from "../assets/images/bulb.png";

function Blog() {
  return (
    <div className="section-wrapper">
      <div className="blog section-padding">
        <div className="sub-heading center">Explore our blog</div>
        <div className="blog-content-wrap center">
          <div className="blog-content center">
            <img className="blog-content-img" src={blog1} alt="atm" />
            <div className="text-wrap center">
              <div className="btn center">EDUCATION</div>
              <div className="content-text">
                4 Effective Tips To Make School Management Easier For School
                Administrators
              </div>
              <div className="date-text">January 2022</div>
            </div>
          </div>
          <div className="blog-content center">
            <img className="blog-content-img" src={blog2} alt="atm" />
            <div className="text-wrap center">
              <div className="btn center">PERSONAL FINANCE</div>
              <div className="content-text">
                How To Successfully Revise For The 2021/2022 WAEC Exam And Pass
                Successfully
              </div>
              <div className="date-text">January 2022</div>
            </div>
          </div>
          <div className="blog-content center">
            <img className="blog-content-img" src={blog3} alt="atm" />
            <div className="text-wrap center">
              <div className="btn center">BUSINESS</div>
              <div className="content-text">
                Why E-Learning Is The Future Of Education In Nigeria
              </div>
              <div className="date-text">January 2022</div>
            </div>
          </div>
          <div className="blog-content center">
            <img className="blog-content-img" src={blog1} alt="atm" />
            <div className="text-wrap center">
              <div className="btn center">EDUCATION</div>
              <div className="content-text">
                4 Effective Tips To Make School Management Easier For School
                Administrators
              </div>
              <div className="date-text">January 2022</div>
            </div>
          </div>
          <div className="blog-content center">
            <img className="blog-content-img" src={blog2} alt="atm" />
            <div className="text-wrap center">
              <div className="btn center">EDUCATION</div>
              <div className="content-text">
                How To Successfully Revise For The 2021/2022 WAEC Exam And Pass
                Successfully
              </div>
              <div className="date-text">January 2022</div>
            </div>
          </div>
          <div className="blog-content center">
            <img className="blog-content-img" src={blog3} alt="atm" />
            <div className="text-wrap center">
              <div className="btn center">BUSINESS</div>
              <div className="content-text">
                Why E-Learning Is The Future Of Education In Nigeria
              </div>
              <div className="date-text">January 2022</div>
            </div>
          </div>
        </div>
      </div>
      <div className="information center">
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
  );
}

export default Blog;
