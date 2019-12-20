import React from "react";
import GridItem from "../gridItem/GridItem";
import "./Grid.scss";

export default function Grid() {
  return (
    <div className="grid">
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
    </div>
  );
}
