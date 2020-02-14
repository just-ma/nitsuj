import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Menu.scss";

export default function Menu() {
  const [atTop, setAtTop] = useState(window.scrollY === 0);
  const [cartClasses, setCartClasses] = useState("");
  const count = useSelector(state => state.counter.value);

  useEffect(() => {
    document.addEventListener("scroll", toggleScroll);
  }, []);

  useEffect(() => {
    if (count === 0) {
      setCartClasses("")
    } else {
      setCartClasses("-blinking")
    }
  }, [count]);

  const toggleScroll = () => {
    setAtTop(window.scrollY === 0);
  };

  return (
    <div className="menu">
      <div className="menu__shoppingCart">
        {atTop ? (
          <p>(scroll)</p>
        ) : (
          <a className={"menu__shoppingCart__text " + cartClasses} href="/">
            cart({count})
          </a>
        )}
      </div>
    </div>
  );
}
