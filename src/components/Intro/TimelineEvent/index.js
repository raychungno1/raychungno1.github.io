import React from "react";
import "./TimelineEvent.css";

function TimelineEvent({ title, name, date, info }) {
  return (
    <>
      <h2 className="event__title">{title}</h2>
      <h3 className="event__name">
        {date} @ <span>{name}</span>
      </h3>
      <ul className="event__list">
        {info.map((i) => (
          <li>{i}</li>
        ))}{" "}
      </ul>
    </>
  );
}

export default TimelineEvent;
