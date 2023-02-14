const { insertProduct, insertItem } = require("../models/Product");

const createProduct = async (req, res) => {
  const data = req.body;
  const { main_image, other_images } = req.files;
  await insertProduct({
    ...data,
    main_image,
    other_images,
  });
  return res.status(200).render("homepage");
};

const createProductItem = async (req, res) => {
  const data = req.body;
  await insertItem({ ...data, product_id: req.params.productId });
  return res.status(200).render("homepage");
};

module.exports = { createProduct, createProductItem };
