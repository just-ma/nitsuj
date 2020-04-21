import React from "react";
import GridItem from "../gridItem/GridItem";
import Cart from "../cart/Cart";
import "./Grid.scss";

export default function Grid({ items }) {
  return (
    <div className="grid">
      {items.map((i, index) => (
        <GridItem sku={i.sku} key={index} name={i.name} price={i.price} />
      ))}
      <Cart stripeToken={"pk_test_t1gO3ggjqTJwMUvRxatu7h8Q00iK15NeBA"}/>
    </div>
  );
}
