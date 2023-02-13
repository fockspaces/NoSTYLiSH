const express = require("express");
const product = express.Router();
const multer = require("multer");

const upload = multer();

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

product.post("/create", upload.single(), (req, res) => {
  console.log(req.body);
  return res.send(req.body);
});

module.exports = product;
