var express = require("express");
var router = express.Router();

const stripe = require("stripe")("sk_test_bKCmhCTHCYeGBWQNrxqnahFY00vDsOqqmb");

router.get("/api/products", async (req, res) => {
  try {
    let products = await stripe.products.list();
    let skus = await stripe.skus.list({ limit: products.data.length * 4 });

    let prodMap = {};
    products.data.forEach((product) => {
      prodMap[product.id] = {
        // sku: {},
        name: product.name,
        price: 0,
        src: null,
      };
    });

    skus.data.forEach((sku) => {
      let p = sku.product;
      let size = sku.attributes.name;
      // prodMap[p].sku[size] = sku.id;
      if (size === "S") {
        prodMap[p].price = sku.price / 100;
        prodMap[p].src = sku.image;
      }
    });

    return res.json({ products: Object.values(prodMap) });
  } catch (err) {
    return res.status(500).send("an error occurred");
  }
});

router.post("/api/checkout", async (req, res) => {
  const items = req.body;
  let itemsMap = {};

  items.forEach((i) => {
    if (itemsMap[i.name]) {
      itemsMap[i.name].quantity++;
    } else {
      itemsMap[i.name] = {
        name: i.name,
        quantity: 1,
        currency: "usd",
        amount: i.price * 100,
        images: [i.src],
      };
    }
  });

  const line_items = Object.values(itemsMap);
  const countries = [
    "US",
    "CA",
    "AU",
    "AT",
    "BE",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HK",
    "IN",
    "IE",
    "IT",
    "JP",
    "LV",
    "LT",
    "LU",
    "MY",
    "MX",
    "NL",
    "NZ",
    "NO",
    "PL",
    "PT",
    "RO",
    "SG",
    "SK",
    "SI",
    "ES",
    "SE",
    "CH",
    "GB",
  ];

  try {
    let session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items,
      shipping_address_collection: {
        allowed_countries: countries,
      },
      success_url: "https://nitsuj.bigcartel.com/success",
      cancel_url: "https://nitsuj.bigcartel.com/cancel",
    });
    return res.json({ session: session });
  } catch (err) {
    return res.status(500).send("an error occurred");
  }
});

module.exports = router;
