import React, { useState, useEffect } from "react";
import "./Box.scss";
import nsjLogo from "../../public/nsj.png";
import test1 from "../../public/test1.jpg";

const data = [
  {
    className: "box__train__main",
    height: null,
    heightOffset: null,
    top: 0,
    topOffset: null,
    src: nsjLogo
  },
  {
    className: "box__train__head",
    height: 2,
    heightOffset: 200,
    top: 0,
    topOffset: -300,
    src: test1
  },
  {
    className: "box__train__item",
    height: null,
    heightOffset: null,
    top: 2,
    topOffset: -500,
    src: nsjLogo
  },
  {
    className: "box__train__item",
    height: null,
    heightOffset: null,
    top: 2,
    topOffset: -950,
    src: test1
  },
  {
    className: "box__train__item",
    height: null,
    heightOffset: null,
    top: 2,
    topOffset: -1400,
    src: nsjLogo
  }
];

export default function Box() {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    document.addEventListener("scroll", toggleScroll);
  }, []);

  const toggleScroll = () => {
    setScroll(window.scrollY);
  };

  const itemVar = [null, scroll, window.innerHeight / 2];

  return (
    <div>
      <div className="box">
        <div className="box__train" style={{ top: -scroll }}>
          {data.map(e => {
            let h = itemVar[e.height] + e.heightOffset;
            let t = scroll - itemVar[e.top] + e.topOffset;
            return (
              <div className={e.className} style={{ height: h }}>
                <img className="box__content" style={{ top: t }} src={e.src} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
