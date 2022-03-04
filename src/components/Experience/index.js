import React, { useEffect, useState } from "react";
import "./Experience.css";

function Experience({ experience }) {
  const [lastSelected, setLastSelected] = useState(0);

  useEffect(() => {
    document
      .querySelector(".progress-bar")
      .style.setProperty("--height", `${10.75 + 2.75 * lastSelected}em`);
  }, [lastSelected]);

  // const progressStyle = document.querySelector(".progress-bar").style;
  // progressStyle.setProperty("--height", "calc(10vw + lastSelected * 2em)");
  return (
    <div className="exp__container">
      <div className="timeline">
        <div className="progress-bar">
          {experience.map((exp, i) => (
            <div
              className={`progress-bar__item ${
                i <= lastSelected ? "selected" : ""
              } ${i === lastSelected ? "last" : ""}`}
              onClick={() => setLastSelected(i)}
            >
              <span>{exp.short}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="timeline__info"></div>
    </div>
  );
}

export default Experience;
