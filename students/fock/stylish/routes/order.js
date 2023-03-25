const express = require("express");
const order = express.Router();

const { checkoutHandler } = require("../controllers/order/orders");
const { authToken } = require("../controllers/middleware/auth");

const {
  getTotal,
  getPie,
  getHistogram,
  getStacks,
} = require("../controllers/orders/orders");

order.get("/total", getTotal);
order.get("/pie", getPie);
order.get("/histogram", getHistogram);
order.get("/stacks", getStacks);

order.post("/checkout", authToken, checkoutHandler);

module.exports = order;
