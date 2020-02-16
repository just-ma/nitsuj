import React from "react";
import { useSelector } from "react-redux";
import WiggleText from "../wiggleText/WiggleText";
import "./ShoppingCart.scss";

const Item = ({ title, price, bold }) => {
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
    </div>
  );
};

export default function ShoppingCart() {
  const items = useSelector(state => state.cart.items);

  const totalPrice = items.reduce((t, i) => t + parseInt(i.price), 0);

  return (
    <div className="shoppingCart">
      <div className="shoppingCart__topBorder">
        <WiggleText>
          ====================================================
        </WiggleText>
      </div>
      <div className="shoppingCart__right">
        {items.map((i, index) => (
          <Item key={index} title={`${i.title} (${i.size})`} price={i.price} />
        ))}
        <div className="shoppingCart__break" />
        <Item bold title={"SUBTOTAL"} price={totalPrice.toString()} />
        <button className={"shoppingCart__checkout"}>Checkout</button>
      </div>
    </div>
  );
}
