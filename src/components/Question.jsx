import React from "react";

import openImage from "../assets/icons/open.png";
import closeImage from "../assets/icons/close.png";

function Question({ textQ, answer }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={`question ${!open && "q-height"}`}>
      <div className="question-text-wrap center">
        <div className="question-text">{textQ}</div>
        <div className="icon center">
          <img
            className="img"
            onClick={() => {setOpen(!open)}}
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
