import React, { useState, useEffect } from "react";
import { infoContent } from "./InfoContent";
import { Link } from "react-router-dom";
import "./InfoPage.scss";

const Contact = () => {
  return <div>contact</div>;
};

const Arrow = ({ down }) => {
  return <span className={"arrow" + (down ? " -down" : "")}>^</span>;
};

const Section = ({ id, title, body, loc }) => {
  const [expanded, setExpanded] = useState(loc === id);

  const toggleExpand = () => {
    setExpanded((p) => !p);
  };

  return (
    <div>
      <h3 id={id} className="section__header" onClick={toggleExpand}>
        <Arrow down={expanded} />
        {title}
      </h3>
      <div className={"section__body" + (expanded ? " -expanded" : "")}>
        {id === "contact" ? <Contact /> : body}
      </div>
    </div>
  );
};

export default function InfoPage() {
  const locArr = window.location.href.split("#");
  let loc = "";
  if (locArr.length > 1) {
    loc = locArr[1];
  } else {
    window.scrollTo(0, 0);
  }

  return (
    <div className="info">
      <div className="info__content">
        {infoContent.map((i) => (
          <Section loc={loc} id={i.id} title={i.title} body={i.body} />
        ))}
      </div>
      <Link className="info__back" to="/">
        {"<BACK"}
      </Link>
    </div>
  );
}
