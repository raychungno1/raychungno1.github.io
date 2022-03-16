import React, { useEffect, useRef } from "react";
import Skill from "./Skill";
import "./Skills.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fromDefaults, toDefaults, isElementInViewport } from "../../helpers";

// Images
import asm from "../../images/logos/asm.png";
import c from "../../images/logos/c.svg";
import csharp from "../../images/logos/csharp.svg";
import css from "../../images/logos/css.svg";
import heroku from "../../images/logos/heroku.svg";
import html from "../../images/logos/html.svg";
import java from "../../images/logos/java.svg";
import jquery from "../../images/logos/jquery.svg";
import js from "../../images/logos/js.svg";
import linux from "../../images/logos/linux.svg";
import matlab from "../../images/logos/matlab.png";
import postgresql from "../../images/logos/postgresql.svg";
import python from "../../images/logos/python.svg";
import rails from "../../images/logos/rails.svg";
import ruby from "../../images/logos/ruby.svg";
import sql from "../../images/logos/sql.svg";
import swift from "../../images/logos/swift.svg";

function Skills() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    gsap.from(element, { opacity: 0, delay: 1 });
    
    const title = element.querySelector(".skills__title");
    if (!isElementInViewport(title)) {
        gsap.fromTo(title, fromDefaults, {
          ...toDefaults,
          opacity: 0.8,
          scrollTrigger: { trigger: title, start: "bottom bottom" },
        });
    }
  }, []);

  return (
    <div className="skills" ref={ref}>
      <div className="container">
        <h1 className="skills__title title">Skills</h1>
        <div className="skills__grid">
          <Skill img={js} title="JavaScript" />
          <Skill img={java} title="Java" />
          <Skill img={python} title="Python" />
          <Skill img={c} title="C" />
          <Skill img={csharp} title="C#" />
          <Skill img={sql} title="SQL" />
          <Skill img={html} title="HTML" />
          <Skill img={css} title="CSS" />
          <Skill img={ruby} title="Ruby" />
          <Skill img={asm} title="Assembly" />
          <Skill img={matlab} title="MATLAB" />
          <Skill img={swift} title="Swift" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
