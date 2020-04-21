import React, { useState, useEffect } from "react";
import Grid from "../../components/grid/Grid";
import Box from "../../components/box/Box";
import Menu from "../../components/menu/Menu";

const callApi = async () => {
  const response = await fetch("/api/products");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

export default function LandingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    callApi()
      .then((res) => setProducts(res.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Box products={products} />
      <Grid products={products} />
      <Menu />
    </div>
  );
}
