const express = require("express");
const product = express.Router();
const multer = require("multer");
const {
  createProduct,
  createProductItem,
  getProductByType,
} = require("../controllers/products");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

const upload = multer({ dest: "uploads/", storage: storage });

product.get("/all", (req, res) => {
  const category = "all";
  getProductByType(req, res, category);
});
product.get("/women", (req, res) => {
  const category = "women";
  getProductByType(req, res, category);
});

product.get("/men", (req, res) => {
  const category = "men";
  getProductByType(req, res, category);
});
product.get("/accessories", (req, res) => {
  const category = "accessories";
  getProductByType(req, res, category);
});

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
