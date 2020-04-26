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

const Item = ({ id, name, price, bold, button, products }) => {
  const dispatch = useDispatch();

  let itemClasses = ["cart__item"];
  bold && itemClasses.push("-bold");
  let index = products.findIndex((i) => i.name === name.split(" (")[0]);

  const onEnter = () => {
    button && dispatch({ type: "HOVER", src: products[index].src });
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

export default function Cart({ stripeToken, products }) {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    if (window.Stripe) {
      setStripe(window.Stripe(stripeToken));
    }
  }, [stripeToken]);

  const items = useSelector((state) => state.cart.items);

  const totalPrice = items.reduce((t, i) => t + i.price, 0);

  const callApi = async () => {
    const response = await fetch("/api/checkout", { method: "POST" });
    const body = await response.json();
    stripe
      .redirectToCheckout({
        sessionId: body.session.id,
      })
      .then((res) => console.log("after", res));
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

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

    callApi()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
            products={products}
          />
        ))}
        <div className="cart__break" />
        <Item
          bold
          name={"SUBTOTAL"}
          price={totalPrice.toString()}
          products={products}
        />
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
