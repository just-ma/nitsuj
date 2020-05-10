import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import WiggleText from "../../components/wiggleText/WiggleText";
import Loading from "../../components/loading/Loading";
import "./SuccessPage.scss";

const ListItem = ({ name, price, quantity, src }) => {
  return (
    <div className="listItem">
      <img className="listItem__image" src={src} alt="thumbnail" />
      <span className="listItem__name">{name}</span>
      <span>{"Qty " + quantity}</span>
      <span>{"$" + price}</span>
    </div>
  );
};

const ShippingAddress = ({ shipping, email, postEmail }) => {
  const [emailed, setEmailed] = useState(false);

  const sendEmail = () => {
    setEmailed(true);
    postEmail();
  };

  return (
    <div className="shipping">
      <div className="shipping__box">
        <p>SHIP TO:</p>
        <div>{shipping}</div>
      </div>
      <div className="shipping__vertical"></div>
      <div className="shipping__box">
        <br />
        <p>An order confirmation will be sent to {email}</p>
        {emailed ? (
          <p>Sent!</p>
        ) : (
          <p className="email" onClick={sendEmail}>
            Click here to resend
          </p>
        )}
      </div>
    </div>
  );
};

export default function SuccessPage() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipping, setShipping] = useState("");
  const [email, setEmail] = useState("");
  const [emailed, setEmailed] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "CLEAR" });
    getSession();
  }, []);

  useEffect(() => {
    if (!emailed) postEmail();
  }, [emailed]);

  const getSession = async () => {
    const checkoutId = window.location.href.split("?session_id=")[1];
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
      setEmailed(data.emailed);
    } catch (err) {
      console.error(err);
    }
  };

  const postEmail = async () => {
    const i = items.map((i) => `${i.quantity}x ${i.name}`);
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        url: window.location.href,
        items: i,
        email: email,
      }),
    };
    try {
      await fetch("/api/email", settings);
    } catch (err) {
      console.error(err);
    }
  };

  return items.length === 0 ? (
    <Loading />
  ) : (
    <div>
      <div className="success">
        <div className="success__header">
          <WiggleText>THANK YOU FOR YOUR ORDER</WiggleText>
        </div>
        <div className="success__items">
          {items.map((i) => (
            <ListItem
              key={i.name}
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

        <ShippingAddress
          shipping={shipping}
          email={email}
          postEmail={postEmail}
        />
      </div>
      <Link className="back" to="/">
        {"<BACK"}
      </Link>
    </div>
  );
}
