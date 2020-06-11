import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "../image/Image";
import Menu from "../menu/Menu";
import nsjLogo from "../../assets/nsj.png";
import "./Box.scss";

const createListItem = (item, index, length, hover) => {
  let i = {
    className: "box__train__",
    top: 0,
    topOffset: null,
    src3: [],
    zoom: false,
  };
  let h = 100 - 500 * index;
  if (index < 0) {
    i.className += "main";
    i.src = nsjLogo;
  } else if (index === length) {
    i.className += "tail";
    i.top = 1;
    i.topOffset = h;
    i.src = hover || nsjLogo;
  } else {
    i.src = item.src;
    i.src2 = item.src2;
    i.src3 = item.src3;
    i.zoom = true;
    if (index === 0) {
      i.className += "head";
      i.height = 1;
      i.heightOffset = 100;
      i.topOffset = -300;
    } else {
      i.className += "item";
      i.top = 1;
      i.topOffset = h;
    }
  }
  return i;
};

const createList = (items, hover) => {
  let list = [];
  let len = items.length;
  for (let i = -1; i <= len; i++) {
    list.push(createListItem(items[i], i, len, hover));
  }
  return list;
};

const BoxContent = ({ products, setAtTop, atTop }) => {
  const [scroll, setScroll] = useState(window.scrollY);
  const hover = useSelector((state) => state.cart.hover);
  const data = createList(products, hover);

  useEffect(() => {
    document.addEventListener("scroll", toggleScroll);
    return () => {
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
            <div key={i} className={e.className} style={{ height: h }}>
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
