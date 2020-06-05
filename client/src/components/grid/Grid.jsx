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
      <Cart stripeToken={"pk_live_HkmEpTpiJqTMtXp2l9VwQKey009zYqMODR"} />
    </div>
  );
}
