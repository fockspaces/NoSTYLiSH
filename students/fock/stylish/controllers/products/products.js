const { getAllProducts } = require("../../models/Product");

const { createProduct, createProductItem } = require("./productCreate");
const { searchCategory, searchId, searchKeyword } = require("./productSearch");

const renderHomePage = async (req, res) => {
  const products = await getAllProducts();
  return res.render("homepage", { products });
};

module.exports = {
  createProduct,
  createProductItem,
  renderHomePage,
  searchCategory,
  searchId,
  searchKeyword,
};
