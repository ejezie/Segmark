import React from "react";

import { Link } from "react-router-dom";

import { useInView } from "react-hook-inview";

import Info from "../components/Info";

import elipse1 from "../assets/images/Ellipse1.png";
import elipse2 from "../assets/images/Ellipse2.png";
import screen2 from "../assets/images/screen2.png";
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
import playd from "../assets/images/playd.png";
import appled from "../assets/images/appled.png";
import card1 from "../assets/icons/card1.png";
import card2 from "../assets/icons/card2.png";
import card3 from "../assets/icons/card3.png";
import card4 from "../assets/icons/card4.png";

function Landing() {
  const [land1, inViewland1] = useInView({
    // threshold: 0.3,
  });
  const [land2, inViewland2] = useInView();
  const [land3, inViewland3] = useInView();
  const [land4, inViewland4] = useInView();
  const [land5, inViewland5] = useInView();
  const [land6, inViewland6] = useInView();
  const [land7, inViewland7] = useInView();
  const [land8, inViewland8] = useInView();
  const [land9, inViewland9] = useInView();
  const [land10, inViewland10] = useInView();
  const [land11, inViewland11] = useInView();
  const [land12, inViewland12] = useInView();

  return (
    <div className="landing">
      {/* New Section */}

      <div
        className="section center section-padding"
        style={{ marginBottom: "4rem" }}
      >
        <div ref={land1} className="left">
          <div
            className={`marginb1 sub-heading  opaczro ${
              inViewland1 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
          >
            Seamless school management system to enhance <br />{" "}
            <span className="purple">learning and development</span>
          </div>
          <div
            className={`text marginb1 opaczro ${
              inViewland1 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.4s", transitionDelay: "0.4s" }}
          >
            We empower schools in improving key areas such as students learning
            and development when you enroll your school on Segmak; you’re
            pushing academic engagement for your teachers and students to the
            next level.
          </div>
          <div
            className={`btn-wrap center marginb1  opaczro ${
              inViewland1 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.6s", transitionDelay: "0.6s" }}
          >
            <Link to={"/signin"}>
              <div className="btn center">Get started</div>
            </Link>
            <Link to={"/contact"}>
              <div className="btn btn-two center">Get in touch</div>
            </Link>
          </div>
          <div
            className={`icon-wrap center  opaczro ${
              inViewland1 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.8s", transitionDelay: "0.8s" }}
          >
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
          <div
            className={`playbtn-wrap center opaczro ${
              inViewland1 && "opacone move-up"
            }`}
            style={{ animationDelay: "1s", transitionDelay: "1s" }}
          >
            <a href="#">
              <img className="play" src={playd} alt="icon" />{" "}
            </a>
            <a href="#">
              <img className="apple" src={appled} alt="icon" />
            </a>
          </div>
        </div>
        <div ref={land2} className="right">
          <div
            className={`image-wrap opaczro ${inViewland2 && "opacone move-up"}`}
            style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
          >
            <img className="screen" src={screen2} alt="screen" />
            <img className="elipse1 float" src={elipse2} alt="screen" />
            <img className="elipse2 float2" src={elipse1} alt="screen" />
          </div>
        </div>
      </div>

      {/* New Section */}

      <div className="section center section-padding">
        <div ref={land3} className="left">
          <div
            className={`marginb1 sub-heading  opaczro ${
              inViewland3 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
          >
            <span className="purple">Just online,</span> the same classroom
          </div>
          <div
            className={`marginb1 text  opaczro ${
              inViewland3 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.4s", transitionDelay: "0.4s" }}
          >
            Improve student participation and enjoy an online and offline
            classroom environment where you can easily share notes and conduct
            classes from anywhere. Segmak Classroom assists schools in measuring
            students' performance in real time.
          </div>
          <div
            className={`btn-wrap center  opaczro ${
              inViewland3 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.6s", transitionDelay: "0.6s" }}
          >
            <Link to={"/signin"}>
              <div className="btn center">Get started</div>
            </Link>
          </div>
        </div>
        <div ref={land4} className="right center">
          <div
            className={`right-img-wrap center  opaczro ${
              inViewland4 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
          >
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
        <div ref={land5} className="left">
          <div
            className={`sub-heading marginb1 opaczro ${
              inViewland5 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
          >
            <span className="purple">Unrestricted Access </span>to learning{" "}
            materials
          </div>
          <div
            className={`text marginb1 opaczro ${
              inViewland5 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.4s", transitionDelay: "0.4s" }}
          >
            Our learning center provides students with unrestricted access to a
            variety of learning resources. Students participate in self-directed
            and independent learning activities with profile analytics and
            performance feedback. Students can create their own performance
            dashboard and track their progress.cademic engagement for your
            teachers and students to the next level.
          </div>
          <div
            className={`btn-wrap center opaczro ${
              inViewland5 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.6s", transitionDelay: "0.6s" }}
          >
            <Link to={"/signin"}>
              <div className="btn center">Get started</div>
            </Link>
          </div>
        </div>
        <div ref={land6} className="right center">
          <div
            className={`right-img-wrap center opaczro ${
              inViewland6 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
          >
            <img className="img1" src={g30} alt="screen" />
            <img className="img3" src={mask} alt="screen" />
          </div>
        </div>
      </div>
      {/* New Section */}

      <div className="section center section-padding">
        <div className="left" ref={land7}>
          <div
            className={`sub-heading marginb1 opaczro ${
              inViewland7 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
          >
            <span className="purple"> Segmak</span> for teachers
          </div>
          <div
            className={`text marginb1 opaczro ${
              inViewland7 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.4s", transitionDelay: "0.4s" }}
          >
            Segmak gives teachers access to tools that help them better engage
            their children and create growth plans that parents can see.
            Teachers can use the site to get free trainings, seminars, and
            workshops.
          </div>
          <div
            className={`btn-wrap center opaczro ${
              inViewland7 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.6s", transitionDelay: "0.6s" }}
          >
            <Link to={"/signin"}>
              <div className="btn center">Get started</div>
            </Link>
          </div>
        </div>
        <div
          ref={land8}
          className={`right center opaczro ${inViewland8 && "opacone move-up"}`}
          style={{ animationDelay: "0.6s", transitionDelay: "0.6s" }}
        >
          <div className="right-img-wrap center">
            <img className="img1" src={g29} alt="screen" />
            <img className="img4" src={happy} alt="screen" />
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="landing-two center">
        <div className="card-wrap center">
          <div
            ref={land9}
            className={`card center opaczro ${
              inViewland9 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.5s", transitionDelay: "0.5s" }}
          >
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
          <div
            ref={land10}
            className={`card center opaczro ${
              inViewland10 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.7s", transitionDelay: "0.7s" }}
          >
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
          <div
            ref={land11}
            className={`card center opaczro ${
              inViewland11 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.9s", transitionDelay: "0.9s" }}
          >
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
          <div
            ref={land12}
            className={`card center opaczro ${
              inViewland12 && "opacone move-up"
            }`}
            style={{ animationDelay: "1.1s", transitionDelay: "1.1s" }}
          >
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
        <Info />
      </div>
    </div>
  );
}

export default Landing;
