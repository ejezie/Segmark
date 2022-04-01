import React from "react";

import Info from "../components/Info";

import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p7 from "../assets/images/p7.png";
import p6 from "../assets/images/p6.png";
import tick from "../assets/icons/tick.png";


function Pricing() {
  return (
    <div className="pricing ">
      <img className="p7" src={p7} alt="color" />
      <img className="p6" src={p6} alt="color" />
      <div className="top center">
        <div className="sub-heading">
          {" "}
          <span className="purple">Segmak</span> Pricing Plans
        </div>
        <img className="p1" src={p1} alt="color" />
        <img className="p2" src={p2} alt="color" />
        <img className="p3" src={p3} alt="color" />
        <img className="p4" src={p4} alt="color" />
        <div className="text">Choose a Smart Plan for Your School</div>
        <div className="middle section-padding center">
          {/* First Card */}
          <div className="price-card price-card-height center">
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
          <div className="price-card center">
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
          <div className="price-card price-card-height center">
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
