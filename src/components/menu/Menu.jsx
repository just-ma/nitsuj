import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Menu.scss";
import WiggleText from "../wiggleText/WiggleText";

export default function Menu() {
  const [atTop, setAtTop] = useState(window.scrollY === 0);
  const [cartClasses, setCartClasses] = useState("");
  const count = useSelector(state => state.cart.value);

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
      <div className="menu__shoppingCart">
        {atTop ? (
          <div className="menu__shoppingCart__scroll">
            <WiggleText>(scroll)</WiggleText>
          </div>
        ) : (
          <a className={"menu__shoppingCart__cart " + cartClasses} href="/">
            cart({count})
          </a>
        )}
      </div>
    </div>
  );
}
