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
          My name is Ray, and I'm a software developer. I am currently studying
          Computer Science & Engineering at the Ohio State University. I love
          both front-end and back-end development, and have a big interest in
          machine learning and AI.
        </p>
        <Experience
          experience={[
            {
              short: "OSU",
              name: "OSU",
              title: "Computer Science & Engineering",
              date: "August 2019 - May 2023",
              info: [
                "CSE major with AI specialization",
                "Expected graduation: May 2023",
                "Major GPA: 4.0"
              ],
            },
            {
              short: "DataFest",
              name: "DataFest",
              title: "Winner | Best Visualization",
              date: "March 2021",
              info: [
                "Performed data analysis with RStudio, providing business insights to an anonymous data provider",
                "Used statistical techniques to identify issues and developed actionable conclusions",
                "Presented findings to panel of judges to win the best visualization category",
              ],
            },
            {
              short: "Chase",
              name: "JPMorgan Chase",
              title: "Software Engineer Intern",
              date: "June - August 2022",
              info: ["Incoming SWE intern"],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Intro;
