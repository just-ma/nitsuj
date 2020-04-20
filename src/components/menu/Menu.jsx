import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Menu.scss";
import WiggleText from "../wiggleText/WiggleText";

export default function Menu() {
  const [atTop, setAtTop] = useState(window.scrollY === 0);
  const [cartClasses, setCartClasses] = useState("");
  const count = useSelector(state => state.cart.items.length);

  useEffect(() => {
    document.addEventListener("scroll", toggleScroll);
  }, []);

  useEffect(() => {
    if (count === 0) {
      setCartClasses("");
    } else {
      setCartClasses("-blinking");
    }
  }, [count]);

  const toggleScroll = () => {
    setAtTop(window.scrollY < 40);
  };

  return (
    <div className="menu">
      <div className="menu__cart">
        {atTop ? (
          <div className="menu__cart__scroll">
            <WiggleText>(scroll)</WiggleText>
          </div>
        ) : (
          <a className={"menu__cart__cart " + cartClasses} href="#cart">
            cart({count})
          </a>
        )}
      </div>
    </div>
  );
}
