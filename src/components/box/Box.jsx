import React, { useState, useEffect } from "react";
import "./Box.scss";
import nsjLogo from "../../public/nsj.png";
import nitsuj from "../../public/nitsuj.jpg";
import bluechina from "../../public/bluechina.jpg";
import channel2 from "../../public/channel2.jpg";
import cocotaxi from "../../public/cocotaxi.jpg";

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
    src: nitsuj
  },
  {
    className: "box__train__item",
    height: null,
    heightOffset: null,
    top: 2,
    topOffset: -500,
    src: bluechina
  },
  {
    className: "box__train__item",
    height: null,
    heightOffset: null,
    top: 2,
    topOffset: -950,
    src: channel2
  },
  {
    className: "box__train__item",
    height: null,
    heightOffset: null,
    top: 2,
    topOffset: -1400,
    src: cocotaxi
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
