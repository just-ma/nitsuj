import React, { useState, useEffect } from "react";
import Grid from "../../components/grid/Grid";
import Box from "../../components/box/Box";
import Menu from "../../components/menu/Menu";
import Loading from "../../components/loading/Loading";

export default function LandingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const loc = window.location.href.split("#")[1];
    if (loc) window.location.href = "#" + loc;
  }, [products]);

  const getProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const body = await res.json();
      setProducts(body.products);
    } catch (err) {
      console.error(err);
    }
  };

  return products.length === 0 ? (
    <Loading />
  ) : (
    <div>
      <Box products={products} />
      <Grid products={products} />
      <Menu />
    </div>
  );
}
