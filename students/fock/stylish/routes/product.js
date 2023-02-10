const express = require("express");
const product = express.Router();

product.get("/", (req, res) => {
  res.render("homepage");
});

product.get("/all", (req, res) => {
  res.send("all");
});
product.get("/women", (req, res) => {
  res.send("women");
});

product.get("/men", (req, res) => {
  res.send("men");
});
product.get("/accessories", (req, res) => {
  res.send("accessories");
});

product.post("/create", (req, res) => {
  console.log(req.body);
  return res.redirect("/products");
});

module.exports = product;
