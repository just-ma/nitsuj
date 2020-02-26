import React from "react";
import { useSelector, useDispatch } from "react-redux";
import WiggleText from "../wiggleText/WiggleText";
import "./ShoppingCart.scss";

const RemoveButton = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="shoppingCart__removeButton"
      onClick={() => dispatch({ type: "DECREMENT", id: id })}
    >
      X
    </button>
  );
};

const Item = ({ id, title, price, bold, button }) => {
  let itemClasses = ["shoppingCart__item"];
  bold && itemClasses.push("-bold");

  return (
    <div className={itemClasses.join(" ")}>
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
