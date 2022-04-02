import React from "react";

import Info from "../components/Info";

import { useInView } from "react-hook-inview";

import ygirl from "../assets/images/ygirl.png";

import Question from "../components/Question";

function About() {
  const data = require("../assets/questions.json");
  // console.log(data);

  const [abObserve, inViewAb] = useInView();
  const [abObserve1, inViewAb1] = useInView();
  const [abObserve2, inViewAb2] = useInView();
  const [abObserve3, inViewAb3] = useInView();
  const [abObserve4, inViewAb4] = useInView();

  return (
    <div className="section-wrap">
      <div className="about center">
        <div
          ref={abObserve}
          className={` sub-heading sub opaczro ${
            inViewAb && "opacone move-up"
          }`}
          style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
        >
          About Segmak
        </div>
        <div
          ref={abObserve1}
          className={` text txt opaczro ${inViewAb1 && "opacone move-up"}`}
          style={{ animationDelay: "0.4s", transitionDelay: "0.4s" }}
        >
          Segmak is the best school ecosystem that combines teacher, student,
          parent and other school staffs in a single automation software. It
          includes a modern design that saves time and provides better insight
          into student performance, attendance, biographical data, class &
          school-wide view, and much more.
        </div>
        <div className="mission center">
          <div
            ref={abObserve2}
            className={` left center opaczro ${inViewAb2 && "opacone move-up"}`}
            style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
          >
            <img src={ygirl} alt="girl" />
            <div className="rings1"></div>
            <div className="rings2"></div>
          </div>
          <div ref={abObserve3} className="right center">
            <div
              className={` text-wrap opaczro ${inViewAb3 && "opacone move-up"}`}
              style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
            >
              <div className="sub-heading marginb1">Mission</div>
              <div className="text" style={{ marginBottom: "4rem" }}>
                Education in today's world should be seamless and accessible.
                Segmak enables players in the education ecosystem to embrace
                digital evolution by fostering a highly accessible and
                collaborative learning environment in which teachers, students,
                and parents collaborate to provide high-quality education.
              </div>
            </div>
            <div
              className={` text-wrap opaczro ${inViewAb3 && "opacone move-up"}`}
              style={{ animationDelay: "0.4s", transitionDelay: "0.4s" }}
            >
              <div className="sub-heading marginb1">Vission</div>
              <div className="text">
                With our excellent solutions, we hope to bring about a radical
                change in industries, institutions, and society as a whole.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="question-section section-padding center">
        <div className="sub-heading center">Frequently Asked Question</div>
        {data.questions.map((item) => {
          return (
            <Question
              textQ={item.title}
              answer={item.answer}
              key={item.index}
            />
          );
        })}
      </div>
      <Info />
    </div>
  );
}

export default About;
