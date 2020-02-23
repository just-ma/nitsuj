import React from "react";
import GridItem from "../gridItem/GridItem";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import {items} from "../../mockData";
import "./Grid.scss";

export default function Grid() {
  return (
    <div className="grid">
      {items.map((i, index) => (
        <GridItem key={index} title={i.title} price={i.price} />
      ))}
      <ShoppingCart />
    </div>
  );
}
