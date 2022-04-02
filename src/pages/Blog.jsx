import React from "react";
import { Link } from "react-router-dom";

import Info from "../components/Info";

import { useInView } from "react-hook-inview"; 

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";


function Blog() {

  const [blogObserve, inViewBlog] = useInView();
  const [blogObserve1, inViewBlog1] = useInView();
  const [blogObserve2, inViewBlog2] = useInView();
  const [blogObserve3, inViewBlog3] = useInView();
  const [blogObserve4, inViewBlog4] = useInView();
  const [blogObserve5, inViewBlog5] = useInView();
  const [blogObserve6, inViewBlog6] = useInView();



  return (
    <div className="section-wrapper">
      <div className="blog section-padding">
        <div
          ref={blogObserve}
          className={` sub-heading center opaczro ${
            inViewBlog && "opacone move-up"
          }`}
          style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
        >
          Explore our blog
        </div>
        <div className="blog-content-wrap center">
          <div
            ref={blogObserve1}
            className={` blog-content center opaczro ${
              inViewBlog1 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.4s", transitionDelay: "0.4s" }}
          >
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
          <div
            ref={blogObserve2}
            className={` blog-content center opaczro ${
              inViewBlog2 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.6s", transitionDelay: "0.6s" }}
          >
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
          <div
            ref={blogObserve3}
            className={` blog-content center opaczro ${
              inViewBlog3 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.8s", transitionDelay: "0.8s" }}
          >
            <img className="blog-content-img" src={blog3} alt="atm" />
            <div className="text-wrap center">
              <div className="btn center">BUSINESS</div>
              <div className="content-text">
                Why E-Learning Is The Future Of Education In Nigeria
              </div>
              <div className="date-text">January 2022</div>
            </div>
          </div>
          <div
            ref={blogObserve4}
            className={` blog-content center opaczro ${
              inViewBlog4 && "opacone move-up"
            }`}
            style={{ animationDelay: "1s", transitionDelay: "1s" }}
          >
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
          <div
            ref={blogObserve5}
            className={` blog-content center opaczro ${
              inViewBlog5 && "opacone move-up"
            }`}
            style={{ animationDelay: "1.2s", transitionDelay: "1.2s" }}
          >
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
          <div
            ref={blogObserve6}
            className={` blog-content center opaczro ${
              inViewBlog6 && "opacone move-up"
            }`}
            style={{ animationDelay: "1.4s", transitionDelay: "1.4s" }}
          >
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
