import React from "react";
import Skill from "./Skill";
import "./Skills.css";

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
  return (
    <div className="skills">
      <div className="container">
        <h1 className="skills__title">Skills</h1>
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
