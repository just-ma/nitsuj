import React, { useState } from "react";
import WiggleText from "../wiggleText/WiggleText";
import "./GridItem.scss";

const SizeBox = () => {
  const [size, setSize] = useState(null);
  const [addClasses, setAddClasses] = useState(null);
  const [added, setAdded] = useState(false);

  const buttons = [
    { title: "S" },
    { title: "M" },
    { title: "L" },
    { title: "XL" }
  ];

  const onSelectSize = title => {
    setSize(title);
    setAddClasses("-selected");
    setAdded(false);
  };

  const onAdd = () => {
    setSize(null);
    setAddClasses(null);
    setAdded(true);
  };

  return (
    <div>
      <div className="gridItem__sizes">
        {buttons.map(b => (
          <SizeButton title={b.title} onSelectSize={onSelectSize} size={size} />
        ))}
      </div>
      <div className="gridItem__description">
        {added && <p className="gridItem__confirmation">Added!</p>}
        <div className={"gridItem__add " + addClasses}>
          <button
            className={"gridItem__add__button " + addClasses}
            onClick={onAdd}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const SizeButton = ({ title, onSelectSize, size }) => {
  let classes = ["sizeButton"];
  size === title && classes.push("-selected");

  return (
    <button className={classes.join(" ")} onClick={() => onSelectSize(title)}>
      {title}
    </button>
  );
};

export default function GridItem() {
  return (
    <div className="gridItem">
      <div className="gridItem__left">
        <WiggleText>BLUE CHINA</WiggleText>
        <span className="price">$25</span>
      </div>
      <div className="gridItem__right">
        <SizeBox />
      </div>
    </div>
  );
}
