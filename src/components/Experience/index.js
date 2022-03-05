import React, { useEffect, useState } from "react";
import TimelineEvent from "../TimelineEvent";
import "./Experience.css";

function Experience({ experience }) {
  const [lastSelected, setLastSelected] = useState(0);

  const select = (i, id) => {
    setLastSelected(i)
    document
      .getElementById(id)
      .scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  useEffect(() => {
    document
      .querySelector(".progress-bar")
      .style.setProperty("--height", `${2.75 + 2.75 * lastSelected}em`);
  }, [lastSelected, experience]);

  return (
    <div className="exp__container">
      <div className="timeline">
        <div className="progress-bar">
          {experience.map((exp, i) => (
            <div
              className={`progress-bar__item ${
                i <= lastSelected ? "selected" : ""
              } ${i === lastSelected ? "last" : ""}`}
              onClick={() => select(i, exp.short)}
            >
              <span>{exp.short}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="timeline__info">
        {experience.map((exp) => (
          <div id={exp.short} className="timeline__event">
            <TimelineEvent {...exp} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
