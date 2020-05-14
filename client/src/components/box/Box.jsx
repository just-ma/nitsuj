import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "../image/Image";
import Menu from "../menu/Menu";
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
  src3,
  zoom
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
    zoom: zoom,
  };
};

const createList = (items, hover) => {
  let data = [
    createListItem(
      "box__train__main",
      null,
      null,
      0,
      null,
      nsjLogo,
      null,
      [],
      false
    ),
  ];
  if (items.length > 0) {
    data.push(
      createListItem(
        "box__train__head",
        1,
        100,
        0,
        -300,
        items[0].src,
        items[0].src2,
        items[0].src3,
        true
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
        1,
        h,
        items[n].src,
        items[n].src2,
        items[n].src3,
        true
      )
    );
  }
  let h = 100 - 500 * items.length;
  data.push(
    createListItem(
      "box__train__tail",
      null,
      null,
      1,
      h,
      hover || nsjLogo,
      null,
      [],
      false
    )
  );
  return data;
};

const BoxContent = ({ products, setAtTop, atTop }) => {
  const [scroll, setScroll] = useState(window.scrollY);
  const hover = useSelector((state) => state.cart.hover);
  const data = createList(products, hover);

  useEffect(() => {
    document.addEventListener("scroll", toggleScroll);
    return function removeListener() {
      document.removeEventListener("scroll", toggleScroll);
    };
  }, []);

  useEffect(() => {
    if (atTop && scroll >= 40) {
      setAtTop(false);
    } else if (!atTop && scroll < 40) {
      setAtTop(true);
    }
  }, [atTop, scroll]);

  const toggleScroll = () => {
    let scrollY = window.scrollY;
    setScroll(scrollY);
  };

  const itemVar = [null, window.innerHeight / 2];

  return (
    <div className="box">
      <div className="box__train" style={{ top: -scroll }}>
        {data.map((e, i) => {
          let h = itemVar[e.height] + e.heightOffset;
          let t = scroll - itemVar[e.top] + e.topOffset;
          return (
            <div key={i} className={e.className} style={{ height: h || null }}>
              <div className="box__content" style={{ top: t }}>
                <Image
                  primary={e.src}
                  secondary={e.src2}
                  remainder={e.src3}
                  zoom={e.zoom}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Box({ products }) {
  const [atTop, setAtTop] = useState(window.scrollY < 40);

  return (
    <div>
      <BoxContent products={products} setAtTop={setAtTop} atTop={atTop} />
      <Menu atTop={atTop} />
    </div>
  );
}
