import React from "react";
import { useSelector, useDispatch } from "react-redux";
import WiggleText from "../wiggleText/WiggleText";
import { items } from "../../mockData";
import "./ShoppingCart.scss";

const RemoveButton = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="shoppingCart__removeButton"
      onClick={() => dispatch({ type: "REMOVE", id: id })}
    >
      X
    </button>
  );
};

const Item = ({ id, title, price, bold, button }) => {
  const dispatch = useDispatch();

  let itemClasses = ["shoppingCart__item"];
  bold && itemClasses.push("-bold");
  let index = items.findIndex(i => i.title === title.split(" (")[0]);

  const onEnter = () => {
    button && dispatch({ type: "HOVER", src: items[index].src });
  };

  const onLeave = () => {
    button && dispatch({ type: "HOVER", src: null });
  };

  return (
    <div
      className={itemClasses.join(" ")}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {title + " "}
      <span>
        {Array(35 - title.length - price.length)
          .fill(".")
          .join("")}
      </span>
      {" $" + price}
      {button && <RemoveButton id={id} />}
    </div>
  );
};

export default function ShoppingCart() {
  const items = useSelector(state => state.cart.items);

  const totalPrice = items.reduce((t, i) => t + parseInt(i.price), 0);

  return (
    <div className="shoppingCart">
      <div className="shoppingCart__topBorder" id="shoppingCart">
        <WiggleText>
          ====================================================
        </WiggleText>
      </div>
      <div className="shoppingCart__right">
        {items.map(i => (
          <Item
            key={i.id}
            id={i.id}
            title={`${i.title} (${i.size})`}
            price={i.price}
            button
          />
        ))}
        <div className="shoppingCart__break" />
        <Item bold title={"SUBTOTAL"} price={totalPrice.toString()} />
        <button className={"shoppingCart__checkout"}>Checkout</button>
      </div>
    </div>
  );
}
