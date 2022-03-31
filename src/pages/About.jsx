import React from "react";

import ygirl from "../assets/images/ygirl.png";

import Question from "../components/Question";

function About() {
  const data = require("../assets/questions.json");
  console.log(data);

  return (
    <div className="section-wrap">
      <div className="about center">
        <div className="sub-heading sub">About Segmak</div>
        <div className="text txt">
          Segmak is the best school ecosystem that combines teacher, student,
          parent and other school staffs in a single automation software. It
          includes a modern design that saves time and provides better insight
          into student performance, attendance, biographical data, class &
          school-wide view, and much more.
        </div>
        <div className="mission center">
          <div className="left center">
            <img src={ygirl} alt="girl" />
            <div className="rings1"></div>
            <div className="rings2"></div>
          </div>
          <div className="right center">
            <div className="text-wrap">
              <div className="sub-heading marginb1">Mission</div>
              <div className="text" style={{ marginBottom: "4rem" }}>
                Education in today's world should be seamless and accessible.
                Segmak enables players in the education ecosystem to embrace
                digital evolution by fostering a highly accessible and
                collaborative learning environment in which teachers, students,
                and parents collaborate to provide high-quality education.
              </div>
            </div>
            <div className="text-wrap">
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
          return <Question textQ={item.title} answer={item.answer} key={item.index}/>;
        })}
      </div>
    </div>
  );
}

export default About;
