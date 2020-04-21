const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;
const stripe = require("stripe")("sk_test_bKCmhCTHCYeGBWQNrxqnahFY00vDsOqqmb");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.get("/api/products", async (req, res) => {
  console.log("HERE");
  try {
    let products = await stripe.products.list();
    let skus = await stripe.skus.list({ limit: products.data.length * 4 });

    let prodMap = {};
    products.data.forEach((product) => {
      prodMap[product.id] = {
        sku: {},
        name: product.name,
        price: 0,
        src: null,
      };
    });

    skus.data.forEach((sku) => {
      let p = sku.product;
      prodMap[p].sku[sku.attributes.name] = sku.id;
      prodMap[p].price = sku.price / 100;
      prodMap[p].src = sku.image;
    });

    return res.json({ products: Object.values(prodMap) });
  } catch (err) {
    return res.status(500).send("an error occurred");
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
