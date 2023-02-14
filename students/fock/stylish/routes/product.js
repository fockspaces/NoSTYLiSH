const express = require("express");
const product = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
});

const upload = multer({ dest: "uploads/", storage: storage });

const { createProduct, createProductItem } = require("../controllers/products");

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

product.post(
  "/create",
  upload.fields([
    { name: "main_image", maxCount: 1 },
    { name: "other_images", maxCount: 3 },
  ]),
  createProduct
);

product.post("/createItem/:productId", createProductItem);

module.exports = product;
