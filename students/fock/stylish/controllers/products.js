const { insertProduct } = require("../models/Product");

const createProduct = async (req, res) => {
  const data = req.body;
  const paths_images = req.files ? req.files.map((file) => file.path) : [];
  const other_images = JSON.stringify(paths_images);
  const main_path = req.file.path;
  await insertProduct({
    ...data,
    main_image: main_path,
    other_images: other_images,
  });
  return res.status(200).send("good");
};

module.exports = { createProduct };
