import React from "react";
import "./Skill.css";

function Skill({ img, title, related }) {
  return (
    <div className="skill">
      <div className="skill__logo">
        <img src={img} alt="" />
      </div>
      <h1 className="skill__title">{title || "Empty"}</h1>
    </div>
  );
}

export default Skill;
