import React from "react";

import screen2 from "../assets/images/screen2.png";
import circle2 from "../assets/images/circle2.png";
import play from "../assets/icons/play.png";
import time from "../assets/icons/time.png";

function Features() {
  return (
    <div className="features section-padding">
      <div className="features-one center">
        <div className="left">
          <div className="sub-heading marginb1">
            Explore the exciting features on Segmak for better academic
            activities
            <span className="purple"> academic activities</span>
          </div>
          <div className="text marginb1">
            Segmak is the best school ecosystem that combines teacher, student,
            parent and other school staffs in a single automation software. it
            includes a modern design that saves time and provides better insight
            into student performance, attendance, biographical data, class &
            school-wide view, and much more.
          </div>
        </div>
        <div className="right center">
          <div className="right-img-wrap center">
            <img className="screen" src={screen2} alt="screen" />
            <img className="circle2" src={circle2} alt="screen" />
            <div className="box">
              <img src={time} alt="icon" />
              <div className="text-wrap">
                <div className="box-text-one">Daily Time Spent</div>
                <div className="box-text-two">3hrs 15mins</div>
              </div>
            </div>
            <div className="box">
              <img src={play} alt="icon" />
              <div className="text-wrap">
                <div className="box-text-one">Video Lessons</div>
                <div className="box-text-two">10mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
