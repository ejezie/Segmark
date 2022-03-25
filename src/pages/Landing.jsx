import React from "react";

import { Link } from "react-router-dom";

import elipse1 from "../assets/images/Ellipse1.png";
import elipse2 from "../assets/images/Ellipse2.png";
import screen from "../assets/images/landing.jpg";
import g29 from "../assets/images/g29.png";
import g31 from "../assets/images/g31.png";
import imgboy from "../assets/images/imgboy.png";
import g30 from "../assets/images/g30.png";
import mask from "../assets/images/mask.png";
import happy from "../assets/images/happy.png";
import outline from "../assets/icons/outline.png";
import people from "../assets/icons/people.png";
import pipscreen from "../assets/icons/pipscreen.png";
import school from "../assets/icons/school.png";
import appstore from "../assets/icons/appstore.png";

function Landing() {
  return (
    <div className="landing">
      {/* New Section */}

      <div className="landing-section center">
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

      {/* New Section */}

      <div className="landing-section center">
        <div className="left">
          <div className="sub-heading marginb1">
            <span className="purple">Just online,</span> the same <br />{" "}
            classroom
          </div>
          <div className="text marginb1">
            Improve student participation and enjoy an online and offline
            classroom environment where you can easily share notes and conduct
            classes from anywhere. Segmak Classroom assists schools in measuring
            students' performance in real time.
          </div>
          <div className="btn-wrap center">
            <Link to={""}>
              <div className="btn center">Get started</div>
            </Link>
          </div>
        </div>
        <div className="right center">
          <div className="right-img-wrap center">
            <img className="img1" src={g31} alt="screen" />
            <img className="img2" src={imgboy} alt="screen" />
          </div>
        </div>
      </div>
      {/* New Section */}

      <div className="landing-section center reverse">
        <div className="left">
          <div className="sub-heading marginb1">
            <span className="purple">Unrestricted Access </span>to learning{" "}
            <br /> materials
          </div>
          <div className="text marginb1">
            Our learning center provides students with unrestricted access to a
            variety of learning resources. Students participate in self-directed
            and independent learning activities with profile analytics and
            performance feedback. Students can create their own performance
            dashboard and track their progress.cademic engagement for your
            teachers and students to the next level.
          </div>
          <div className="btn-wrap center">
            <Link to={""}>
              <div className="btn center">Get started</div>
            </Link>
          </div>
        </div>
        <div className="right center">
          <div className="right-img-wrap center">
            <img className="img1" src={g30} alt="screen" />
            <img className="img3" src={mask} alt="screen" />
          </div>
        </div>
      </div>
      {/* New Section */}

      <div className="landing-section center">
        <div className="left">
          <div className="sub-heading marginb1">
            <span className="purple"> Segmak</span> for teachers
          </div>
          <div className="text marginb1">
            Segmak gives teachers access to tools that help them better engage
            their children and create growth plans that parents can see.
            Teachers can use the site to get free trainings, seminars, and
            workshops.
          </div>
          <div className="btn-wrap center">
            <Link to={""}>
              <div className="btn center">Get started</div>
            </Link>
          </div>
        </div>
        <div className="right center">
          <div className="right-img-wrap center">
            <img className="img1" src={g29} alt="screen" />
            <img className="img4" src={happy} alt="screen" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
