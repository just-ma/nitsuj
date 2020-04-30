var express = require("express");
var router = express.Router();
var constants = require("./constants");

const stripe = require("stripe")("sk_test_bKCmhCTHCYeGBWQNrxqnahFY00vDsOqqmb");

router.get("/api/products", async (req, res) => {
  try {
    let products = await stripe.products.list();
    let skus = await stripe.skus.list({ limit: products.data.length * 4 });

    let prodMap = {};
    products.data.forEach((product) => {
      prodMap[product.id] = {
        name: product.name,
        price: 0,
        src: null,
        src2: null,
        src3: [],
      };
    });

    skus.data.forEach((sku) => {
      let p = sku.product;
      let size = sku.attributes.name;
      switch (size) {
        case "S":
          prodMap[p].price = sku.price / 100;
          prodMap[p].src = sku.image;
          break;
        case "M":
          prodMap[p].src2 = sku.image;
          break;
        default:
          sku.image && prodMap[p].src3.push(sku.image);
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
  const countries = constants.COUNTRIES;

  try {
    let session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items,
      shipping_address_collection: {
        allowed_countries: countries,
      },
      success_url:
        "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/#cart",
    });
    return res.json({ session: session });
  } catch (err) {
    return res.status(500).send("an error occurred");
  }
});

router.post("/api/session", async (req, res) => {
  const sessionId = req.body.checkoutId;
  let name, items, totalPrice, shipping, email, customerId;

  try {
    let session = await stripe.checkout.sessions.retrieve(sessionId);

    customerId = session.customer;
    items = session.display_items.map((i) => ({
      name: i.custom.name,
      price: (i.quantity * i.amount) / 100,
      quantity: i.quantity,
      src: i.custom.images[0],
    }));
    totalPrice = items.reduce((t, i) => i.price + t, 0);
    name = session.shipping.name;
    const shipRes = session.shipping.address;
    shipping = `${name}
      ${shipRes.line1}${shipRes.line2 ? `\n${shipRes.line2}` : ""}
      ${shipRes.city}${shipRes.state ? ` ${shipRes.state}` : ``}, ${
      shipRes.postal_code
    }, ${shipRes.country}`;
  } catch (err) {
    return res.status(500).send("an error occurred");
  }

  try {
    let customer = await stripe.customers.retrieve(customerId);
    email = customer.email;
    return res.json({
      name: name,
      items: items,
      totalPrice: totalPrice,
      shipping: shipping,
      email: email,
    });
  } catch (err) {
    return res.status(500).send("an error occurred");
  }
});

module.exports = router;
