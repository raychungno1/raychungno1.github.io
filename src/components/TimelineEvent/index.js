import React from "react";
import "./TimelineEvent.css";

function TimelineEvent({ title, name, date }) {
  return (
    <>
      <h2 className="event__title">{title}</h2>
      <h3 className="event__name">{date} @ <span>{name}</span></h3>
    </>
  );
}

export default TimelineEvent;
