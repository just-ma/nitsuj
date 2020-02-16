import React from "react";
import GridItem from "../gridItem/GridItem";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import "./Grid.scss";

const items = [
  {
    title: "NIT SU J.",
    price: "25"
  },
  {
    title: "BLUE CHINA",
    price: "25"
  },
  {
    title: "CHANNEL 2",
    price: "25"
  },
  {
    title: "COCOTAXI",
    price: "25"
  }
];

export default function Grid() {
  return (
    <div className="grid">
      {items.map(i => (
        <GridItem title={i.title} price={i.price} />
      ))}
      <ShoppingCart />
    </div>
  );
}
