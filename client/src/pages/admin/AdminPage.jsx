import React, { useState } from "react";
import axios from "axios";
import { API_PATH } from "../../constants";
import "./AdminPage.scss";

const Row = ({ first, second }) => {
  return (
    <tr>
      <td>{first}</td>
      <td>{second}</td>
    </tr>
  );
};

export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("25");

  const createProduct = () => {
    return;
    axios
      .post(`${API_PATH}/create`, {
        name: name,
        price: price + "00",
      })
      .then((res) => {
        const data = res.data;
      })
      .catch((error) => {
        console.error(error);
      });

    axios.post(`${API_PATH}/sku`);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <table className="admin">
      <Row
        first="Name"
        second={<input value={name} onChange={onChangeName} />}
      />
      <Row
        first="Price"
        second={<input value={price} onChange={onChangePrice} />}
      />
      <Row second={<button onClick={createProduct}>Create Product</button>} />
    </table>
  );
}
