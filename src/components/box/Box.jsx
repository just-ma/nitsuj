import React, { useState, useEffect } from "react";
import "./Box.scss";
import nsjLogo from "../../public/nsj.png";
import test1 from "../../public/test1.jpg";

export default function Box() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => setScroll(window.scrollY));
  }, []);

  return (
    <div className="box">
      <div className="box__train" style={{ top: -scroll }}>
        <div className="box__train__main">
          <img className="box__content" style={{ top: scroll }} src={nsjLogo} />
        </div>
        <div
          className="box__train__head"
          style={{ height: window.innerHeight / 2 + 100 }}
        >
          <img
            className="box__content"
            style={{ top: scroll - 300 }}
            src={test1}
          />
        </div>
        <div className="box__train__item">
          <img
            className="box__content"
            style={{ top: scroll - window.innerHeight / 2 - 400 }}
            src={nsjLogo}
          />
        </div>
        <div className="box__train__item">
          <img
            className="box__content"
            style={{ top: scroll - window.innerHeight / 2 - 850 }}
            src={test1}
          />
        </div>
        <div className="box__train__item">
          <img
            className="box__content"
            style={{ top: scroll - window.innerHeight / 2 - 1300 }}
            src={nsjLogo}
          />
        </div>
      </div>
    </div>
  );
}
