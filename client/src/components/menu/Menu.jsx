import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Menu.scss";
import WiggleText from "../wiggleText/WiggleText";

export default function Menu({ atTop }) {
  const [cartEmpty, setCartEmpty] = useState(false);
  const count = useSelector((state) => state.cart.items.length);

  useEffect(() => {
    setCartEmpty(count === 0);
  }, [count]);

  return (
    <div className="menu">
      {atTop ? (
        <div className="menu__scroll">
          <WiggleText>(scroll)</WiggleText>
        </div>
      ) : (
        <div className="menu__items">
          <a
            className={"menu__cart" + (cartEmpty ? "" : " -blinking")}
            href="#cart"
          >
            cart({count})
          </a>
          <Link className="menu__info" to="/info">
            info
          </Link>
        </div>
      )}
    </div>
  );
}
