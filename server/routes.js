var express = require("express");
var router = express.Router();
var constants = require("./constants");
var config = require("./config");
const nodemailer = require("nodemailer");
const stripe = require("stripe")(config.STRIPE_KEY);

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
  let name, items, totalPrice, shipping, email, customerId, paymentId, emailed;

  try {
    let session = await stripe.checkout.sessions.retrieve(sessionId);

    customerId = session.customer;
    items = session.display_items.map((i) => ({
      name: i.custom.name,
      price: (i.quantity * i.amount) / 100,
      quantity: i.quantity,
      src: i.custom.images ? i.custom.images[0] : null,
    }));
    totalPrice = items.reduce((t, i) => i.price + t, 0);
    name = session.shipping.name;
    const shipRes = session.shipping.address;
    shipping = `${name}
      ${shipRes.line1}${shipRes.line2 ? `\n${shipRes.line2}` : ""}
      ${shipRes.city}${shipRes.state ? ` ${shipRes.state}` : ``}, ${
      shipRes.postal_code
    }, ${shipRes.country}`;
    paymentId = session.payment_intent;
  } catch (err) {
    return res.status(500).send("an error occurred");
  }

  try {
    let customer = await stripe.customers.retrieve(customerId);
    email = customer.email;
  } catch (err) {
    return res.status(500).send("an error occurred");
  }

  try {
    let paymentIntent = await stripe.paymentIntents.retrieve(paymentId);
    emailed = paymentIntent.metadata.emailed;
  } catch (err) {
    return res.status(500).send("an error occurred");
  }

  if (!emailed) {
    try {
      await stripe.paymentIntents.update(paymentId, {
        metadata: { emailed: true },
      });
    } catch (err) {
      return res.status(500).send("an error occurred");
    }
  }

  return res.json({
    name: name,
    items: items,
    totalPrice: totalPrice,
    shipping: shipping,
    email: email,
    emailed: emailed,
  });
});

router.post("/api/email", async (req, res) => {
  const nameArr = req.body.name.split(" ");
  const name = nameArr.length === 2 ? nameArr[0] : req.body.name;
  const items = req.body.items;
  const url = req.body.url;
  const email = req.body.email;

  const generateEmail = () => {
    return `Hey ${name},
    
Thanks for your order!
    
${items.map((i) => `\t${i}`).join("\n")}

For more details, please visit here: ${url}. For any questions or concerns, please reply to this email.
    
Cheers,
Justin`;
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nit.su.j.apparel@gmail.com",
      pass: config.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "nit.su.j.apparel@gmail.com",
    to: email,
    subject: "NIT SU J. Order Confirmed",
    text: generateEmail(),
  };

  try {
    transporter.sendMail(mailOptions);
  } catch (err) {
    return res.status(500).send("an error occurred");
  }
});

router.post("/api/contact", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const body = req.body.body;

  const generateEmail = () => {
    return `Name: ${name} \nEmail: ${email} \nBody: ${body}`;
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nit.su.j.apparel@gmail.com",
      pass: config.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "nit.su.j.apparel@gmail.com",
    to: "nit.su.j.apparel@gmail.com",
    subject: "Customer message",
    text: generateEmail(),
  };

  try {
    transporter.sendMail(mailOptions);
  } catch (err) {
    return res.status(500).send("an error occurred");
  }
});

module.exports = router;
