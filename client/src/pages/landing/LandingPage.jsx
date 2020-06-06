import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "../../components/grid/Grid";
import Box from "../../components/box/Box";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import { API_PATH } from "../../constants";

export default function LandingPage() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "INITIALIZE" });
    getProducts();
  }, []);

  useEffect(() => {
    const loc = window.location.href.split("#")[1];
    if (loc) window.location.href = "#" + loc;
  }, [products]);

  const getProducts = () => {
    axios
      .get(`${API_PATH}/products`)
      .then((res) => {
        const data = res.data;
        setProducts(data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return products.length === 0 ? (
    <Loading />
  ) : (
    <div>
      <Box products={products} />
      <Grid products={products} />
    </div>
  );
}
