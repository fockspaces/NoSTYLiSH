const { insertProduct, insertItem } = require("../../models/Product/Product");

const createProduct = async (req, res) => {
  const data = req.body;
  const { main_image, other_images } = req.files;
  await insertProduct({
    ...data,
    main_image,
    other_images,
  });
  return res.status(200).redirect("/");
};

const createProductItem = async (req, res) => {
  const data = req.body;
  await insertItem({ ...data, product_id: req.params.productId });
  return res.status(200).redirect("/");
};

module.exports = {
  createProduct,
  createProductItem,
};
