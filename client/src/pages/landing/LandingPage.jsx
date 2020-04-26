import React, { useState, useEffect } from "react";
import Grid from "../../components/grid/Grid";
import Box from "../../components/box/Box";
import Menu from "../../components/menu/Menu";

export default function LandingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const body = await res.json();
      setProducts(body.products);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Box products={products} />
      <Grid products={products} />
      <Menu />
    </div>
  );
}
