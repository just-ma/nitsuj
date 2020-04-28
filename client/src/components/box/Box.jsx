import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import nsjLogo from "../../public/nsj.png";
import "./Box.scss";

const createListItem = (
  className,
  height,
  heightOffset,
  top,
  topOffset,
  src
) => {
  return {
    className: className,
    height: height,
    heightOffset: heightOffset,
    top: top,
    topOffset: topOffset,
    src: src,
  };
};

const createList = (items, hover) => {
  let data = [createListItem("box__train__main", null, null, 0, null, nsjLogo)];
  if (items.length > 0) {
    data.push(
      createListItem("box__train__head", 2, 100, 0, -300, items[0].src)
    );
  }
  for (let n = 1; n < items.length; n++) {
    let h = 100-500 * n;
    data.push(
      createListItem("box__train__item", null, null, 2, h, items[n].src)
    );
  }
  let h = 100-500 * items.length;
  data.push(
    createListItem("box__train__tail", null, null, 2, h, hover || nsjLogo)
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
                <img
                  className="box__content"
                  style={{ top: t }}
                  src={e.src}
                  alt={"apparel"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
