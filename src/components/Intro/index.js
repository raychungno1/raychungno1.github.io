import React, { useEffect, useRef } from "react";
import "./Intro.css";
import Experience from "./Experience";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fromDefaults, toDefaults, isElementInViewport } from "../../helpers";

// Images
import wavesTop from "../../images/waves-top.svg";

function Intro() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    gsap.from(element, { opacity: 0, delay: 1 });
    
    const title = element.querySelector(".intro__title");
    if (!isElementInViewport(title)) {
        gsap.fromTo(title, fromDefaults, {
          ...toDefaults,
          opacity: 0.8,
          scrollTrigger: { trigger: title, start: "bottom bottom" },
        });
    }
    const info = element.querySelector(".intro__info");
    if (!isElementInViewport(info)) {
        gsap.fromTo(info, fromDefaults, {
          ...toDefaults,
          scrollTrigger: { trigger: info, start: "20% bottom" },
        });
    }
  }, []);

  return (
    <div className="intro__container" ref={ref}>
      <img src={wavesTop} alt="wave-top" className="intro__border" />
      <h1 className="intro__title title">About Me</h1>
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
