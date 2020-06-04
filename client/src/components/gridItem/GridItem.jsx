import React, { useState } from "react";
import { useDispatch } from "react-redux";
import WiggleText from "../wiggleText/WiggleText";
import "./GridItem.scss";

const SizeBox = ({ name, price, src }) => {
  const [size, setSize] = useState(null);
  const [addClasses, setAddClasses] = useState(null);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  const buttons = ["S", "M", "L", "XL"];

  const onSelectSize = (title) => {
    if (size === title) {
      setSize(null);
      setAddClasses(null);
    } else {
      setSize(title);
      setAddClasses("-selected");
    }
    setAdded(false);
  };

  const onAdd = () => {
    setSize(null);
    setAddClasses(null);
    setAdded(true);
    dispatch({
      type: "ADD",
      name: `${name} (${size})`,
      src: src,
      price: price,
    });
  };

  return (
    <div>
      <div className="gridItem__sizes">
        {buttons.map((b, i) => (
          <SizeButton
            key={i}
            name={b}
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

const SizeButton = ({ name, onSelectSize, size }) => {
  let classes = ["sizeButton"];
  size === name && classes.push("-selected");

  return (
    <button className={classes.join(" ")} onClick={() => onSelectSize(name)}>
      {name}
    </button>
  );
};

export default function GridItem({ name, price, src }) {
  return (
    <div className="gridItem">
      <div className="gridItem__left">
        <span className="name">
          <WiggleText>{name}</WiggleText>
        </span>
        <span className="price">
          <WiggleText>{"$" + price}</WiggleText>
        </span>
      </div>
      <div className="gridItem__right">
        <SizeBox name={name} price={price} src={src} />
      </div>
    </div>
  );
}
