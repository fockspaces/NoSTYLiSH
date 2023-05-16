const express = require("express");
const product = express.Router();
const {
  createProduct,
  createProductItem,
  searchCategory,
  searchKeyword,
  searchId,
} = require("../controllers/products/products");

// const upload = require("../utils/multer");
const upload = require("../utils/multerS3");

// search by category
product.get("/all", (req, res) => {
  const category = "all";
  searchCategory(req, res, category);
});
product.get("/women", (req, res) => {
  const category = "women";
  searchCategory(req, res, category);
});

product.get("/men", (req, res) => {
  const category = "men";
  searchCategory(req, res, category);
});
product.get("/accessories", (req, res) => {
  const category = "accessories";
  searchCategory(req, res, category);
});

// search by keyword
product.get("/search", searchKeyword);
product.get("/details", searchId);

product.post(
  "/create",
  upload.fields([
    { name: "main_image", maxCount: 1 },
    { name: "other_images", maxCount: 10 },
  ]),
  createProduct
);

product.post("/createItem/:productId", createProductItem);

module.exports = product;
