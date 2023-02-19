const express = require("express");
const admin = express.Router();

const {
  renderProductCreate,
  renderItemCreate,
} = require("../controllers/products/productCreate");

const { renderCampaignPage } = require("../controllers/marketing/marketings");

admin.get("/product", renderProductCreate);
admin.get("/item/:productId", renderItemCreate);

admin.get("/campaign", renderCampaignPage);

module.exports = admin;
