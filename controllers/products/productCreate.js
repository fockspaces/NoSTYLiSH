const { insertProduct, insertItem } = require("../../models/Product/Product");
const { imagePath } = require("../../utils/infofilter");

const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const { main_image, other_images } = req.files;
    console.log(req.files);
    let main_path;
    let other_paths;

    // set to key
    // todo : differntiate local and aws method
    main_path = main_image ? main_image[0].key.split("/").pop() : "";
    other_paths = other_images
      ? JSON.stringify(other_images.map((image) => image.key.split("/").pop()))
      : "";

    // ignore directory
    console.log(main_path);
    console.log(other_paths);

    await insertProduct({
      ...data,
      main_path,
      other_paths,
    });
    return res.status(200).redirect("/");
  } catch (e) {
    console.error(e);
  }
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
