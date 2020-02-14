import React from "react";
import "./ShoppingCart.scss";
import WiggleText from "../wiggleText/WiggleText";

const items = [
  { title: "BLUE CHINA", size: "S", price: "25" },
  { title: "COCOTAXI", size: "S", price: "50" }
];

const Item = ({ title, price }) => {
  return (
    <div className="shoppingCart__item">
      {title + " "}
      <span>
        {Array(35 - title.length - price.length)
          .fill(".")
          .join("")}
      </span>
      {(price === "TBD" ? ". " : " $") + price}
    </div>
  );
};

export default function ShoppingCart() {
  const totalPrice = items.reduce((t, i) => t + parseInt(i.price), 0);

  return (
    <div className="shoppingCart">
      <div className="shoppingCart__topBorder">
        <WiggleText>
          ====================================================
        </WiggleText>
      </div>
      <div className="shoppingCart__right">
        {items.map(i => (
          <Item title={`${i.title} (${i.size})`} price={i.price} />
        ))}
        <div className="shoppingCart__break" />
        <Item title={"SHIPPING"} price={"TBD"} />
        <Item title={"TOTAL"} price={totalPrice.toString()} />
        <button className={"shoppingCart__checkout"}>Checkout</button>
      </div>
    </div>
  );
}
