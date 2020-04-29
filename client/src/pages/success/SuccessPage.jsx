import React, { useState, useEffect } from "react";
import WiggleText from "../../components/wiggleText/WiggleText";
import "./SuccessPage.scss";

const ListItem = ({ name, price, quantity, src }) => {
  return (
    <div className="listItem">
      <img className="listItem__image" src={src} />
      <span className="listItem__name">{name}</span>
      <span>{"Qty " + quantity}</span>
      <span>{"$" + price}</span>
    </div>
  );
};

const ShippingAddress = ({ shipping }) => {
  return (
    <div className="shipping">
      <div className="shipping__box">
        <p>SHIP TO:</p>
        <div>{shipping}</div>
      </div>
      <div className="shipping__vertical"></div>
      <div className="shipping__box">
        <p>BILL TO:</p>
        <div>{shipping}</div>
      </div>
    </div>
  );
};

const BackButton = () => {
  return (
    <a className="backButton" href="/">
      {"<BACK"}
    </a>
  );
};

export default function SuccessPage() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipping, setShipping] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    const checkoutId = window.location.href.split("?session_id=")[1];
    console.log(checkoutId);
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checkoutId: checkoutId }),
    };
    try {
      const res = await fetch("/api/session", settings);
      const data = await res.json();
      setName(data.name);
      setItems(data.items);
      setTotalPrice(data.totalPrice);
      setShipping(data.shipping);
      setEmail(data.email);

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="success">
        <div className="success__header">
          <WiggleText>THANK YOU FOR YOUR ORDER</WiggleText>
        </div>
        <div className="success__message">
          <div className="success__message__text">
            A confirmation email will be sent to {email}
          </div>
        </div>
        <div className="success__items">
          {items.map((i) => (
            <ListItem
              name={i.name}
              price={i.price}
              quantity={i.quantity}
              src={i.src}
            />
          ))}
          <div className="success__items__total">
            <h4 className="success__items__totalText">Total:</h4>
            <h4>${totalPrice}</h4>
          </div>
        </div>

        <ShippingAddress shipping={shipping} />
      </div>
      <div className="back">
        <BackButton />
      </div>
    </div>
  );
}
