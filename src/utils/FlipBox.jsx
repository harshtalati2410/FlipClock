import React from "react";
import "./FlipBox.css";

function FlipBox(props) {
  return (
    <div className="flip-card" id={props.i}>
      <div className="top"></div>
      <div className="bottom"></div>
    </div>
  );
}

export default FlipBox;
