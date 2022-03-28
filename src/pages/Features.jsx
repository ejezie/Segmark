import React, { useState } from "react";

import { useInView } from "react-hook-inview";

import screen2 from "../assets/images/screen2.png";
import circle2 from "../assets/images/circle2.png";
import play from "../assets/icons/play.png";
import time from "../assets/icons/time.png";
import f21 from "../assets/icons/f21.png";
import f22 from "../assets/icons/f22.png";
import f23 from "../assets/icons/f23.png";
import f24 from "../assets/icons/f24.png";
import f31 from "../assets/icons/f31.png";
import f32 from "../assets/icons/f32.png";
import f33 from "../assets/icons/f33.png";
import f34 from "../assets/icons/f34.png";
import school from "../assets/icons/school.png";
import feat1 from "../assets/images/feat1.png";
import feat2 from "../assets/images/feat2.png";
import feat3 from "../assets/images/feat3.png";
import outline from "../assets/icons/outline.png";
import pipscreen from "../assets/icons/pipscreen.png";
import cash from "../assets/icons/cash.png";
import bulb from "../assets/images/bulb.png";
import hans from "../assets/images/hans.png";

function Features() {
  const [featOne, inViewfeatOne] = useInView({
    threshold: 0.3,
  });
  const [featTwo, inViewfeatTwo] = useInView({
    threshold: 0.3,
  });
  const [featThree, inViewfeatThree] = useInView({
    threshold: 0.3,
  });

  return (
    <>
      <div className="features section-padding">
        <div className="features-one center">
          <div className="left">
            <div className="sub-heading marginb1">
              Explore the exciting features on Segmak for better academic
              activities
              <span className="purple"> academic activities</span>
            </div>
            <div className="text marginb1">
              Segmak is the best school ecosystem that combines teacher,
              student, parent and other school staffs in a single automation
              software. it includes a modern design that saves time and provides
              better insight into student performance, attendance, biographical
              data, class & school-wide view, and much more.
            </div>
          </div>
          <div className="right center">
            <div className="right-img-wrap center">
              <img className="screen2" src={screen2} alt="screen" />
              <img className="circle2" src={circle2} alt="screen" />
              <div className="box1 center">
                <img src={time} alt="icon" />
                <div className="text-wrap">
                  <div className="box-text-one">Daily Time Spent</div>
                  <div className="box-text-two">3hrs 15mins</div>
                </div>
              </div>
              <div className="box2 center">
                <img src={play} alt="icon" />
                <div className="text-wrap center">
                  <div className="box-text-one">Video Lessons</div>
                  <div className="box-text-two">10mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* New Section */}
        <div className="features-two center">
          <div className="scroll-bar center">
            <div className={`bar ${inViewfeatOne && "bar-focus"}`}></div>
            <div className={`bar ${inViewfeatTwo && "bar-focus"}`}></div>
            <div className={`bar ${inViewfeatThree && "bar-focus"}`}></div>
          </div>
          <div className="big-wrap center">
            {/* first */}
            <div ref={featOne} className="features-two-wrap center">
              <div className="left center">
                <div className="cards-wrap center">
                  <div className="card center">
                    <div className="icon-wrap center">
                      <div className="img-wrap center">
                        <img src={school} alt="icon" />
                      </div>
                      <div className="card-heading">School Module</div>
                    </div>
                    <div className="text">
                      Manage other accounts, manage teachers, students parents
                      etc.
                    </div>
                  </div>
                  <div className="card center">
                    <div className="icon-wrap center">
                      <div className="img-wrap center">
                        <img src={outline} alt="icon" />
                      </div>
                      <div className="card-heading">Student Info</div>
                    </div>
                    <div className="text">
                      Student admission, student list, student attendance,
                      promote reports, etc.
                    </div>
                  </div>
                  <div className="card center">
                    <div className="icon-wrap center">
                      <div className="img-wrap center">
                        <img src={pipscreen} alt="icon" />
                      </div>
                      <div className="card-heading">Teacher</div>
                    </div>
                    <div className="text">
                      Uploading content materials, assignment, syllabus
                      downloads and many more
                    </div>
                  </div>
                  <div className="card center">
                    <div className="icon-wrap center">
                      <div className="img-wrap center">
                        <img src={cash} alt="icon" />
                      </div>
                      <div className="card-heading">Fees Collection</div>
                    </div>
                    <div className="text center">
                      Collect fess when due search discounts etc
                    </div>
                  </div>
                </div>
              </div>
              <div className="right center">
                <img src={feat1} alt="woman" />
                <div className="rings1"></div>
                <div className="rings2"></div>
              </div>
            </div>
            {/* second */}
            <div ref={featTwo} className="features-two-wrap center">
              <div className="left center">
                <div className="cards-wrap center">
                  <div className="card center">
                    <div className="icon-wrap center">
                      <div className="img-wrap center">
                        <img src={f21} alt="icon" />
                      </div>
                      <div className="card-heading">Accounts</div>
                    </div>
                    <div className="text">
                      Profit, income, expense, search query account, list
                      payment methods etc
                    </div>
                  </div>
                  <div className="card center">
                    <div className="icon-wrap center">
                      <div className="img-wrap center">
                        <img src={f22} alt="icon" />
                      </div>
                      <div className="card-heading">Examination</div>
                    </div>
                    <div className="text">
                      Student admission, student list, student attendance
                      promote reports, etc.
                    </div>
                  </div>
                  <div className="card center">
                    <div className="icon-wrap center">
                      <div className="img-wrap center">
                        <img src={f23} alt="icon" />
                      </div>
                      <div className="card-heading">Communication</div>
                    </div>
                    <div className="text">
                      Control how you send messages, notice for holidays,events
                      etc reports and more
                    </div>
                  </div>
                  <div className="card center">
                    <div className="icon-wrap center">
                      <div className="img-wrap center">
                        <img src={f24} alt="icon" />
                      </div>
                      <div className="card-heading">Academics</div>
                    </div>
                    <div className="text center">
                      Take control and manage class routines,subjects, assign
                      teachers etc
                    </div>
                  </div>
                </div>
              </div>
              <div className="right center">
                <img src={feat2} alt="woman" />
                <div className="rings1"></div>
                <div className="rings2"></div>
              </div>
            </div>
            {/* Third */}
            <div ref={featThree} className="features-two-wrap center">
              <div className="left center">
                <div className="cards-wrap center">
                  <div className="card center">
                    <div className="icon-wrap center">
                      <div className="img-wrap center">
                        <img src={f31} alt="icon" />
                      </div>
                      <div className="card-heading">Libary </div>
                    </div>
                    <div className="text">
                      You can add and remove books and other eduational
                      materials
                    </div>
                  </div>
                  <div className="card center">
                    <div className="icon-wrap center">
                      <div className="img-wrap center">
                        <img src={f32} alt="icon" />
                      </div>
                      <div className="card-heading">Reports</div>
                    </div>
                    <div className="text">
                      Get detailed class, students, progress cards, attendance
                      reports etc.
                    </div>
                  </div>
                  <div className="card center">
                    <div className="icon-wrap center">
                      <div className="img-wrap center">
                        <img src={f33} alt="icon" />
                      </div>
                      <div className="card-heading">Human Resource</div>
                    </div>
                    <div className="text">
                      Staff (directory, attendance, reports) payroll designation
                      department and more
                    </div>
                  </div>
                  <div className="card center">
                    <div className="icon-wrap center">
                      <div className="img-wrap center">
                        <img src={f34} alt="icon" />
                      </div>
                      <div className="card-heading">Live Classes</div>
                    </div>
                    <div className="text center">
                      Students can attend live classes on Segmak
                    </div>
                  </div>
                </div>
              </div>
              <div className="right center">
                <img src={feat3} alt="woman" />
                <div className="rings1"></div>
                <div className="rings2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Information Section */}
      <div className="information center" style={{ marginBottom: "5rem" }}>
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
    </>
  );
}

export default Features;
