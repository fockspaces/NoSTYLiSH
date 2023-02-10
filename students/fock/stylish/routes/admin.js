const express = require("express");
const admin = express.Router();

admin.get("/product", (req, res) => {
  res.render("admin/productCreate");
});

module.exports = admin;
