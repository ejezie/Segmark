import React from "react";

import { useInView } from "react-hook-inview";

import openImage from "../assets/icons/open.png";
import closeImage from "../assets/icons/close.png";

function Question({ textQ, answer }) {
  const [open, setOpen] = React.useState(false);
  const [qObserve, inViewQ] = useInView({
    threshold: "0.5",
  });

  return (
    <div
      ref={qObserve}
      className={`question opaczro ${!open && "q-height"} ${inViewQ && "opacone move-up"}`}
      style={{ animationDelay: "0s", transitionDelay: "0.8s" }}
    >
      <div className="question-text-wrap center">
        <div className="question-text">{textQ}</div>
        <div className="icon center">
          <img
            className="img"
            onClick={() => {
              setOpen(!open);
            }}
            src={open ? closeImage : openImage}
            alt="icon"
          />
        </div>
      </div>
      <div className="question-answer">{answer}</div>
    </div>
  );
}

export default Question;
