import React from "react";
import "./Intro.css";
import Experience from "../Experience";

// Images
import wavesTop from "../../images/waves-top.svg";

function Intro() {
  return (
    <div className="intro__container">
      <img src={wavesTop} alt="wave-top" class="intro__border" />
      <h1 className="intro__title">About Me</h1>
      <div className="intro__row">
        <p className="intro__info">
          Hi, my name is Ray, and I'm a software developer. I am currently
          studying Computer Science & Engineering at the Ohio State University.
        </p>
        <Experience
          experience={[{ short: "OSU" }, { short: "DataFest" }, { short: "Chase" }]}
        />
      </div>
    </div>
  );
}

export default Intro;
