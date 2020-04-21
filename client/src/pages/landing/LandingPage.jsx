import React, {useEffect} from "react";
import Grid from "../../components/grid/Grid";
import Box from "../../components/box/Box";
import Menu from "../../components/menu/Menu";
import { items } from "../../mockData";

const callApi = async () => {
  const response = await fetch("/api/hello");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);

  return body;
};

export default function LandingPage() {

  useEffect(() => {
    console.log("HERE")
    callApi()
      .then((res) => console.log(res.express))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Box items={items} />
      <Grid items={items} />
      <Menu />
    </div>
  );
}
