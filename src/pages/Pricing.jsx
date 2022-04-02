import React from "react";

import Info from "../components/Info";

import { useInView } from "react-hook-inview";

import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p7 from "../assets/images/p7.png";
import p6 from "../assets/images/p6.png";
import tick from "../assets/icons/tick.png";

function Pricing() {
  const [price, inViewprice] = useInView();
  const [price1, inViewprice1] = useInView();
  const [price2, inViewprice2] = useInView();
  const [price3, inViewprice3] = useInView();
  const [price4, inViewprice4] = useInView();

  return (
    <div className="pricing ">
      <img className="p7 float" src={p7} alt="color" />
      <img className="p6 float2" src={p6} alt="color" />
      <div className="top center">
        <div
          ref={price}
          className={`sub-heading opaczro ${inViewprice && "opacone move-up"}`}
          style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
        >
          {" "}
          <span className="purple">Segmak</span> Pricing Plans
        </div>
        <div ref={price1}>
          <img
            src={p1}
            alt="color"
            className={`p1 opaczro float ${
              inViewprice1 && "opacone move-right"
            }`}
            style={{ animationDelay: "1s", transitionDelay: "1s" }}
          />
          <img
            className={`p2 opaczro float ${
              inViewprice1 && "opacone move-right"
            }`}
            style={{ animationDelay: "1.5s", transitionDelay: "1.5s" }}
            src={p2}
            alt="color"
          />
          <img
            className={`p3 opaczro float2 ${
              inViewprice1 && "opacone move-left"
            }`}
            style={{ animationDelay: "1.7s", transitionDelay: "1.7s" }}
            src={p3}
            alt="color"
          />
          <img
            className={`p4 opaczro float2 ${
              inViewprice1 && "opacone move-right"
            }`}
            style={{ animationDelay: "2s", transitionDelay: "2s" }}
            src={p4}
            alt="color"
          />
        </div>
        <div
          className={` text opaczro ${inViewprice1 && "opacone move-up"}`}
          style={{ animationDelay: "0.4s", transitionDelay: "0.4s" }}
        >
          Choose a Smart Plan for Your School
        </div>
        <div className="middle section-padding center">
          {/* First Card */}
          <div
            ref={price2}
            className={`price-card price-card-height center opaczro ${
              inViewprice2 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.4s", transitionDelay: "0.4s" }}
          >
            <div className="up center">
              <div className="price-header">Basic Plan</div>
              <div className="text">
                For schools that wants to automate this process
              </div>
              <div className="text">
                <span className="purple bold"> ₦1000 </span>{" "}
                <span className="textbold">/Term/Student</span>
              </div>
            </div>
            <div className="down center">
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Unlimited Student Registration</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Exam Results Computation</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Daily Attendance</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Students Profile Board</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Lifetime Access to School Records</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Webinars and Trainings for Teachers</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">SMS and Email notifications</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Non-Academic Staff Privileges</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Mobile App</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">100% Security and Data Encryption</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Two-factor Authentication</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Ongoing Technical Support</div>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div
            ref={price3}
            className={`price-card center opaczro ${
              inViewprice3 && "opacone move-up"
            }`}
            style={{ animationDelay: "0.6s", transitionDelay: "0.6s" }}
          >
            <div className="up center">
              <div className="price-header">Standard Plan</div>
              <div className="text">
                For schools seeking advanced management and automation tools
              </div>
              <div className="text">
                <span className="purple bold"> ₦2000 </span>{" "}
                <span className="textbold">/Term/Student</span>
              </div>
            </div>
            <div className="down center">
              <div className="bold-text center">
                All the features in the Basic Plan +
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">School Fees Payment and Monitoring</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Class Timetable</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">
                  Segmak Classroom for Uninterrupted Schooling sessions
                </div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Homework Management</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Chat System for Teachers and Parents</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">
                  School Activities and Events Management
                </div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">Library Access for Students</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">24/7 Support</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">99.99% uptime SLA</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">
                  Hostel Management for Boarding Schools
                </div>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div
            ref={price4}
            className={`price-card price-card-height center opaczro ${
              inViewprice4 && "opacone move-up"
            }`}
            style={{ animationDelay: ".8s", transitionDelay: ".8s" }}
          >
            <div className="up center">
              <div className="price-header">Premuim Plan</div>
              <div className="text">
                Get full-suite, robust cloud solutions and analytics for your
                school or institute
              </div>
              <div className="text">
                <span className="purple bold"> ₦3000 </span>{" "}
                <span className="textbold">/Term/Student</span>
              </div>
            </div>
            <div className="down center">
              <div className="bold-text">
                All the features in the Standard Plan +
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">CBT for Tests and Exams</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">
                  Weekly Auto-Generated Student Academic Report
                </div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">
                  Analytics Dashboard to Monitor Students Performance
                </div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">School Clinic Management</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">School Cafeteria Management</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">
                  Analytics and Reports for School Management
                </div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">99.99% guaranteed uptime SLA</div>
              </div>
              <div className="text-wrap center">
                <img src={tick} alt="" />
                <div className="text">
                  Unlimited access to the learning centre
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <Info />
      </div>
    </div>
  );
}

export default Pricing;
