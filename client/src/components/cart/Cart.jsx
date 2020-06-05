import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WiggleText from "../wiggleText/WiggleText";
import axios from "axios";
import "./Cart.scss";

const shippingCost = 5;

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

const Item = ({ id, name, price, bold, src, button }) => {
  const dispatch = useDispatch();

  let itemClasses = ["cart__item"];
  bold && itemClasses.push("-bold");

  const onEnter = () => {
    button && dispatch({ type: "HOVER", src: src });
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
      <span>{`${name}  $${price}`}</span>
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

  let items = useSelector((state) => state.cart.items);
  let totalPrice = items.reduce((t, i) => t + i.price, shippingCost);

  const checkout = () => {
    if (shippingCost) {
      items.push({
        id: -1,
        name: "Shipping",
        price: shippingCost
      });
    }
    axios
      .post("/.netlify/functions/app/api/checkout", items)
      .then((res) => {
        const data = res.data;
        stripe.redirectToCheckout({
          sessionId: data.session.id,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="cart">
      <div className="cart__topBorder" id="cart">
        <WiggleText>{Array(100).fill("- -").join("+")}</WiggleText>
      </div>
      <div className="cart__right">
        {items.map((i) => (
          <Item
            key={i.id}
            id={i.id}
            name={i.name}
            price={i.price}
            src={i.src}
            button
          />
        ))}
        <div className="cart__break" />
        {shippingCost && (
          <Item bold name={"SHIPPING"} price={shippingCost.toString()} />
        )}
        <Item bold name={"TOTAL"} price={totalPrice.toString()} />
        <button
          className="cart__checkout"
          onClick={checkout}
          disabled={items.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
