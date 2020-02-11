import React, { useState, useEffect } from "react";
import "./Box.scss";
import nsjLogo from "../../public/nsj.png";

export default function Box() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => setScroll(window.scrollY));
  }, []);

  return (
    <div className="box">
      <div className="box__main" style={{ bottom: scroll }}>
        <img className="box__content" style={{ top: scroll }} src={nsjLogo}/>
      </div>
    </div>
  );
}
