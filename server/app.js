const express = require("express");
const serverless = require("serverless-http");
var indexRouter = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/.netlify/functions/app", indexRouter);

module.exports = app;
module.exports.handler = serverless(app);
