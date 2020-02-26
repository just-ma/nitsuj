import React, { useState } from "react";
import { useDispatch } from "react-redux";
import WiggleText from "../wiggleText/WiggleText";
import "./GridItem.scss";

const SizeBox = ({ title, price }) => {
  const [size, setSize] = useState(null);
  const [addClasses, setAddClasses] = useState(null);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

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
    dispatch({ type: "ADD", title: title, size: size, price: price });
  };

  return (
    <div>
      <div className="gridItem__sizes">
        {buttons.map((b, i) => (
          <SizeButton
            key={i}
            title={b.title}
            onSelectSize={onSelectSize}
            size={size}
          />
        ))}
      </div>
      <div className="gridItem__description">
        {added && (
          <div className="gridItem__confirmation">
            <span>Added!</span>
          </div>
        )}
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

export default function GridItem({ title, price }) {
  return (
    <div className="gridItem">
      <div className="gridItem__left">
        <WiggleText>{title}</WiggleText>
        <span className="price">
          <WiggleText>{"$" + price}</WiggleText>
        </span>
      </div>
      <div className="gridItem__right">
        <SizeBox title={title} price={price} />
      </div>
    </div>
  );
}
