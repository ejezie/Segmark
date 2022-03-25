import React from "react";

import { Link } from "react-router-dom";


import elipse1 from "../assets/images/Ellipse1.png";
import elipse2 from "../assets/images/Ellipse2.png";
import screen from "../assets/images/landing.jpg";
import outline from "../assets/icons/outline.png";
import people from "../assets/icons/people.png";
import pipscreen from "../assets/icons/pipscreen.png";
import school from "../assets/icons/school.png";
import appstore from "../assets/icons/appstore.png";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-one center">
        <div className="left">
          <div className="sub-heading marginb1">
            Seamless school management <br /> system to enhance <br />{" "}
            <span className="purple">learning and development</span>
          </div>
          <div className="text marginb1">
            We empower schools in improving key areas such as students learning
            and development when you enroll your school on Segmak; you’re
            pushing academic engagement for your teachers and students to the
            next level.
          </div>
          <div className="btn-wrap center">
            <Link to={""}>
              <div className="btn center">Get started</div>
            </Link>
            <Link to={""}>
              <div className="btn btn-two center">Get in touch</div>
            </Link>
          </div>
          <div className="icon-wrap center">
            <div className="wrap center">
              <div className="img-wrap center">
                <img src={school} alt="icon" />
              </div>
              <div className="icon-text">Schools</div>
            </div>
            <div className="wrap center">
              <div className="img-wrap center">
                <img src={pipscreen} alt="icon" />
              </div>
              <div className="icon-text">Teachers</div>
            </div>
            <div className="wrap center">
              <div className="img-wrap center">
                <img src={people} alt="icon" />
              </div>
              <div className="icon-text">Parents</div>
            </div>
            <div className="wrap center">
              <div className="img-wrap center">
                <img src={outline} alt="icon" />
              </div>
              <div className="icon-text">Students</div>
            </div>
          </div>
          <div className="btn-wrap center">
            <a href="#">
              <img className="appstore" src={appstore} alt="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <img className="image" src={screen} alt="screen" />
          <img className="elipse1" src={elipse2} alt="screen" />
          <img className="elipse2" src={elipse1} alt="screen" />
        </div>
      </div>
      <div className="landing-one center">
        <div className="left">
          <div className="sub-heading marginb1">
            Seamless school management <br /> system to enhance <br />{" "}
            <span className="purple">learning and development</span>
          </div>
          <div className="text marginb1">
            We empower schools in improving key areas such as students learning
            and development when you enroll your school on Segmak; you’re
            pushing academic engagement for your teachers and students to the
            next level.
          </div>
          <div className="btn-wrap center">
            <Link to={""}>
              <div className="btn center">Get started</div>
            </Link>
          </div>
        
          <div className="btn-wrap center">
            <a href="#">
              <img className="appstore" src={appstore} alt="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <img className="image" src={screen} alt="screen" />
          <img className="elipse1" src={elipse2} alt="screen" />
          <img className="elipse2" src={elipse1} alt="screen" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
