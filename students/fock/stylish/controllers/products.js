const { insertProduct } = require("../models/Product");

const createProduct = async (req, res) => {
  const data = req.body;
  await insertProduct(data);
  return res.send(req.body);
};

module.exports = { createProduct };
