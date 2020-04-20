import React from "react";
import Grid from "../../components/grid/Grid";
import Box from "../../components/box/Box";
import Menu from "../../components/menu/Menu";
import { items } from "../../mockData";

export default function LandingPage() {
  return (
    <div>
      <Box items={items} />
      <Grid items={items} />
      <Menu />
    </div>
  );
}
