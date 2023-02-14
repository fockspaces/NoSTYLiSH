const express = require("express");
const admin = express.Router();

admin.get("/product", (req, res) => {
  return res.render("admin/productCreate");
});

module.exports = admin;
