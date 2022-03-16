import React from "react";
import "./Intro.css";
import Experience from "./Experience";

// Images
import wavesTop from "../../images/waves-top.svg";

function Intro() {
  return (
    <div className="intro__container">
      <img src={wavesTop} alt="wave-top" class="intro__border" />
      <h1 className="intro__title">About Me</h1>
      <div className="intro__row">
        <div className="intro__info">
          <p>
            I'm <span>Ray Chung</span>, a software developer studying Computer Science
            and Engineering at the <span>Ohio State University</span>.
          </p>
          <br />
          <p>
            I love both <span>front-end</span> and <span>back-end</span> development, and have a big
            interest in <span>machine learning</span> and <span>AI</span>.
          </p>
        </div>
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
                "Major GPA: 4.0",
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
