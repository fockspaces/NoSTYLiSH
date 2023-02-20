const express = require("express");
const order = express.Router();

const { checkoutHandler } = require("../controllers/order/orders");
const { authToken } = require("../controllers/middleware/auth");

order.post("/checkout", authToken, checkoutHandler);

module.exports = order;
