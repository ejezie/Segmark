import React from "react";

import { Link } from "react-router-dom";

import linepath from "../assets/images/linepath.png";
import password from "../assets/images/password.png";
import playd from "../assets/images/playd.png";
import appled from "../assets/images/appled.png";
import p1 from "../assets/images/p1.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import barchart from "../assets/images/barchart.png";
import grad from "../assets/icons/grad.png";
import signupscreen from "../assets/images/signupscreen.png";

function SignIn() {
  return (
    <div className="section-wrap">
      <div className="auth center signin">
        <div className="left center">
          <div className="sub-heading">Login</div>
          <div className="text">
            Please provide the following details to access your account
          </div>
          <form action="" className="form center">
            <div className="input-wrap">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" />
            </div>
            <div className="input-wrap">
              <img className="seepassword" src={password} alt="see" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="btn center">Login</div>
            <div className="text">
              New here?{" "}
              <Link className="link" to={"/signup"}>
                Create an account
              </Link>{" "}
            </div>
          </form>
        </div>
        <div className="right center">
          <div className="sub-heading">Welcome Back</div>
          <div className="text">
            Find out how to improve your school's experience
          </div>
          <div className="image-wrap">
            <div className="card-one">
              <div className="top center">
                <div className="left-side center">
                  <img className="gradimage" src={grad} alt="student-icon" />
                  <div className="text-wrap">
                    <div className="card-text">Total Students</div>
                    <div className="card-num">244</div>
                  </div>
                </div>
                <div className="right-side">
                  <div className="card-green-text">12%</div>
                </div>
              </div>
              <div className="bottom center">
                <img className="lineimg" src={linepath} alt="vector" />
              </div>
            </div>
            <img className="signup-screen" src={signupscreen} alt="screen" />
            <div className="card-two center">
              <div className="card-text">Academic Progress</div>
              <img src={barchart} alt="bar" />
            </div>
          </div>
          <div className="text txt">You can download the application</div>
          <div className="playbtn-wrap center">
            <a href="#">
              <img className="play" src={playd} alt="icon" />{" "}
            </a>
            <a href="#">
              <img className="apple" src={appled} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
