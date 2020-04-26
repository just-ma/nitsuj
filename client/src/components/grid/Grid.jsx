import React from "react";
import GridItem from "../gridItem/GridItem";
import Cart from "../cart/Cart";
import "./Grid.scss";

export default function Grid({ products }) {
  return (
    <div className="grid">
      {products.map((i, index) => (
        <GridItem key={index} name={i.name} price={i.price} src={i.src} />
      ))}
      <Cart stripeToken={"pk_test_t1gO3ggjqTJwMUvRxatu7h8Q00iK15NeBA"} />
    </div>
  );
}
