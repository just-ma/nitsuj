import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WiggleText from "../wiggleText/WiggleText";
import { items } from "../../mockData";
import "./Cart.scss";

const RemoveButton = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="cart__removeButton"
      onClick={() => dispatch({ type: "REMOVE", id: id })}
    >
      X
    </button>
  );
};

const Item = ({ id, name, price, bold, button }) => {
  const dispatch = useDispatch();

  let itemClasses = ["cart__item"];
  bold && itemClasses.push("-bold");
  let index = items.findIndex((i) => i.name === name.split(" (")[0]);

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
      {name + " "}
      <span>
        {Array(35 - name.length - price.toString().length)
          .fill(".")
          .join("")}
      </span>
      {" $" + price}
      {button && <RemoveButton id={id} />}
    </div>
  );
};

export default function Cart({ stripeToken }) {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    if (window.Stripe) {
      setStripe(window.Stripe(stripeToken));
    }
  }, [stripeToken]);

  const items = useSelector((state) => state.cart.items);

  const totalPrice = items.reduce((t, i) => t + i.price, 0);

  const checkout = () => {
    let count = new Map();

    items
      .map((i) => i.sku)
      .forEach((sku) => {
        count.set(sku, count.get(sku) + 1 || 1);
      });

    let stripeItems = Array.from(count.entries()).map((item) => ({
      sku: item[0],
      quantity: item[1],
    }));

    stripe.redirectToCheckout({
      items: stripeItems,
      successUrl: "https://nitsuj.bigcartel.com/success",
      cancelUrl: "https://nitsuj.bigcartel.com/canceled",
    });
  };

  return (
    <div className="cart">
      <div className="cart__topBorder" id="cart">
        <WiggleText>
          ====================================================
        </WiggleText>
      </div>
      <div className="cart__right">
        {items.map((i) => (
          <Item
            key={i.id}
            id={i.id}
            name={`${i.name} (${i.size})`}
            price={i.price}
            button
          />
        ))}
        <div className="cart__break" />
        <Item bold name={"SUBTOTAL"} price={totalPrice.toString()} />
        <button className={"cart__checkout"} onClick={checkout} disabled={items.length === 0}>
          Checkout
        </button>
      </div>
    </div>
  );
}
