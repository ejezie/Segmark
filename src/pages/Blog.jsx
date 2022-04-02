import React from "react";
import { Link } from "react-router-dom";

import Info from "../components/Info";

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";


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
      <Info />
    </div>
  );
}

export default Blog;
