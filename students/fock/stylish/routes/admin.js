const express = require("express");
const admin = express.Router();

const {
  renderProductCreate,
  renderItemCreate,
} = require("../controllers/products/productCreate");

const { renderSignIn } = require("../controllers/users/userOAuth");
const { renderCheckoutPage } = require("../controllers/order/orders");
const { renderCampaignPage } = require("../controllers/marketing/marketings");
const { authToken, authorize } = require("../controllers/middleware/auth");

admin.get("/product", authToken, authorize(["product"]), renderProductCreate);
admin.get(
  "/item/:productId",
  authToken,
  authorize(["item"]),
  renderItemCreate
);

admin.get("/campaign", authToken, authorize(["campaign"]), renderCampaignPage);

admin.get("/checkout", authToken, authorize(["checkout"]), renderCheckoutPage);

admin.get("/signin", authToken, authorize(["signin"]), renderSignIn);

module.exports = admin;
