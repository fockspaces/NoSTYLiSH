const { insertProduct, insertItem } = require("../../models/Product/Product");
const { imagePath } = require("../../utils/infofilter");

const createProduct = async (req, res) => {
  const data = req.body;
  const { main_image, other_images } = req.files;
  const origin = req.headers.origin;
  const main_path = main_image ? imagePath(origin, main_image[0].filename) : "";
  const other_paths = other_images
    ? JSON.stringify(
        other_images.map((image) => imagePath(origin, image.filename))
      )
    : "";
  await insertProduct({
    ...data,
    main_path,
    other_paths,
  });
  return res.status(200).redirect("/");
};

const createProductItem = async (req, res) => {
  const data = req.body;
  await insertItem({ ...data, product_id: req.params.productId });
  return res.status(200).redirect("/");
};

const renderProductCreate = (req, res) => {
  return res.render("admin/productCreate");
};

const renderItemCreate = (req, res) => {
  const { productId } = req.params;
  return res.render("admin/itemCreate", { productId });
};

module.exports = {
  createProduct,
  createProductItem,
  renderProductCreate,
  renderItemCreate,
};
