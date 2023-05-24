import React from "react";
import Weather from "./Weather";
import Intro from "./Intro";

function Header() {
  return (
    <header>
      <h1>Rider Journal</h1>
      <Intro />
      {/* <h3 className="intro">Total Miles</h3> */}
      <div className="weather-container">
        <Weather />
      </div>
    </header>
  );
}

export default Header;
