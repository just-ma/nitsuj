import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WiggleText from "../wiggleText/WiggleText";
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

  const checkout = async () => {
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    };
    try {
      const res = await fetch("/api/checkout", settings);
      const data = await res.json();
      stripe
        .redirectToCheckout({
          sessionId: data.session.id,
        })
        .then((res) => console.log("after", res));
    } catch (err) {
      console.error(err);
    }
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
            name={i.name}
            price={i.price}
            src={i.src}
            button
          />
        ))}
        <div className="cart__break" />
        <Item bold name={"SUBTOTAL"} price={totalPrice.toString()} />
        <button
          className={"cart__checkout"}
          onClick={checkout}
          disabled={items.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
