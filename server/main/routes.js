var express = require('express')
var router = express.Router()
const stripe = require("stripe")("sk_test_bKCmhCTHCYeGBWQNrxqnahFY00vDsOqqmb");

router.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

router.post("/api/world", (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

router.get("/api/products", async (req, res) => {
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

router.post("/api/checkout", async (req, res) => {
  try {
    let session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          name: "cool bean",
          amount: 200,
          currency: "usd",
          quantity: 10,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      success_url: "https://nitsuj.bigcartel.com/success",
      cancel_url: "https://nitsuj.bigcartel.com/cancel",
    });
    return res.json({ session: session });
  } catch (err) {
    return res.status(500).send("an error occurred");
  }
});

module.exports = router