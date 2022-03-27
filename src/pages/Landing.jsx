import React from "react";

import { Link } from "react-router-dom";

import elipse1 from "../assets/images/Ellipse1.png";
import elipse2 from "../assets/images/Ellipse2.png";
import screen from "../assets/images/landing.jpg";
import screen2 from "../assets/images/screen2.png";
import g29 from "../assets/images/g29.png";
import g31 from "../assets/images/g31.png";
import imgboy from "../assets/images/imgboy.png";
import g30 from "../assets/images/g30.png";
import mask from "../assets/images/mask.png";
import happy from "../assets/images/happy.png";
import hans from "../assets/images/hans.png";
import infobg from "../assets/images/infobg.png";
import bulb from "../assets/images/bulb.png";
import outline from "../assets/icons/outline.png";
import people from "../assets/icons/people.png";
import pipscreen from "../assets/icons/pipscreen.png";
import school from "../assets/icons/school.png";
import appstore from "../assets/icons/appstore.png";
import card1 from "../assets/icons/card1.png";
import card2 from "../assets/icons/card2.png";
import card3 from "../assets/icons/card3.png";
import card4 from "../assets/icons/card4.png";

function Landing() {
  return (
    <div className="landing">
      {/* New Section */}

      <div
        className="section center section-padding"
        style={{ marginBottom: "4rem" }}
      >
        <div className="left">
          <div className="sub-heading marginb1">
            Seamless school management  system to enhance <br /> {" "}
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
          <div className="image-wrap">
            <img className="screen" src={screen2} alt="screen" />
            <img className="elipse1" src={elipse2} alt="screen" />
          <img className="elipse2" src={elipse1} alt="screen" />
          </div>
        </div>
      </div>

      {/* New Section */}

      <div className="section center section-padding">
        <div className="left">
          <div className="sub-heading marginb1">
            <span className="purple">Just online,</span> the same {" "}
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

      <div
        className="section center reverse section-padding"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <div className="left">
          <div className="sub-heading marginb1">
            <span className="purple">Unrestricted Access </span>to learning{" "}
            materials
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

      <div className="section center section-padding">
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

      {/* New Section */}
      <div className="landing-two center">
        <div className="card-wrap center">
          <div className="card center">
            <div className="wrap center">
              <div className="icon center">
                <img src={card1} alt="icon" />
              </div>
              <div className="card-heading">Exam Master</div>
              <div className="text">
                You can manage exams, set grade range, tabulation sheet, exam
                schedules etc
              </div>
            </div>
          </div>
          <div className="card center">
            <div className="wrap center">
              <div className="icon center">
                <img src={card2} alt="icon" />
              </div>
              <div className="card-heading">Live Classes</div>
              <div className="text">
                Students can attend virtual clases on Segmak from their teachers
              </div>
            </div>
          </div>
          <div className="card center">
            <div className="wrap center">
              <div className="icon center">
                <img src={card3} alt="icon" />
              </div>
              <div className="card-heading">Ebooks & Libary</div>
              <div className="text">
                Get access to learning resources and materials like past
                questions, assignments and files for students
              </div>
            </div>
          </div>
          <div className="card center">
            <div className="wrap center">
              <div className="icon center">
                <img src={card4} alt="icon" />
              </div>
              <div className="card-heading">Attendance</div>
              <div className="text">
                You can set students, employees exam attendance and parents will
                receive an sms when a student is absent
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information center">
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

export default Landing;
