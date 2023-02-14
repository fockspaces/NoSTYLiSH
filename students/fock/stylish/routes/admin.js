const express = require("express");
const admin = express.Router();

admin.get("/product", (req, res) => {
  return res.render("admin/productCreate");
});

admin.get("/item/:productId", (req, res) => {
  const { productId } = req.params;
  return res.render("admin/itemCreate", { productId });
});

module.exports = admin;
