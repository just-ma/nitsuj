import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "../image/Image";
import nsjLogo from "../../assets/nsj.png";
import "./Box.scss";

const createListItem = (
  className,
  height,
  heightOffset,
  top,
  topOffset,
  src,
  src2,
  src3
) => {
  return {
    className: className,
    height: height,
    heightOffset: heightOffset,
    top: top,
    topOffset: topOffset,
    src: src,
    src2: src2,
    src3: src3,
  };
};

const createList = (items, hover) => {
  let data = [
    createListItem("box__train__main", null, null, 0, null, nsjLogo, null, []),
  ];
  if (items.length > 0) {
    data.push(
      createListItem(
        "box__train__head",
        2,
        100,
        0,
        -300,
        items[0].src,
        items[0].src2,
        items[0].src3
      )
    );
  }
  for (let n = 1; n < items.length; n++) {
    let h = 100 - 500 * n;
    data.push(
      createListItem(
        "box__train__item",
        null,
        null,
        2,
        h,
        items[n].src,
        items[n].src2,
        items[n].src3
      )
    );
  }
  let h = 100 - 500 * items.length;
  data.push(
    createListItem(
      "box__train__tail",
      null,
      null,
      2,
      h,
      hover || nsjLogo,
      null,
      []
    )
  );
  return data;
};

export default function Box({ products }) {
  const [scroll, setScroll] = useState(window.scrollY);
  const hover = useSelector((state) => state.cart.hover);
  const data = createList(products, hover);

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
          {data.map((e, i) => {
            let h = itemVar[e.height] + e.heightOffset;
            let t = scroll - itemVar[e.top] + e.topOffset;
            return (
              <div
                key={i}
                className={e.className}
                style={{ height: h || null }}
              >
                <div className="box__content" style={{ top: t }}>
                  <Image
                    primary={e.src}
                    secondary={e.src2}
                    remainder={e.src3}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
