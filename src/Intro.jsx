import React from "react";

function Intro(props) {
  return (
    <div className="intro">
      <h3>Total Miles</h3>
      <span>{props.totalMiles}</span>
    </div>
  );
}

export default Intro;
