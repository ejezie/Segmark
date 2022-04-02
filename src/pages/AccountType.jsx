import React from "react";

import { Link } from "react-router-dom";

import logo from "../assets/icons/logo.png";
import learning from "../assets/images/learning.png";
import teacher from "../assets/images/teacher.png";
import qualitytime from "../assets/images/quality_time.png";

function AccountType() {
  return (
    <>
      <div className="logo-icon" style={{ padding: "1rem 0" }}>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="account center">
        <div className="account-wrap center">
          <div className="top center">
            <div className="sub-heading">Account Type</div>
            <div className="text">
              Please select the type of Account You want to Sign Up for
            </div>
          </div>
          <div className="card-wrap center">
            <div className="card center">
              <div className="img-wrap center">
                <img src={learning} alt="learning" />
              </div>
              <div className="text">School Account</div>
            </div>
            <div className="card center">
              <div className="img-wrap center">
                <img src={qualitytime} alt="learning" />
              </div>
              <div className="text">Parent Account</div>
            </div>
            <div className="card center">
              <div className="img-wrap center">
                <img src={teacher} alt="learning" />
              </div>
              <div className="text">Student Account</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountType;
