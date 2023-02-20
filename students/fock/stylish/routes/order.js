const express = require("express");
const order = express.Router();

const { checkoutHandler } = require("../controllers/order/orders");

// order.post("/checkout", checkoutHandler);

module.exports = order;
