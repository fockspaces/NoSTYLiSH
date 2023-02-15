const {
  insertProduct,
  insertItem,
  getAllProducts,
  getAllInfo,
} = require("../models/Product");

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

const handleInfo = (rawData) => {
  const filterData = rawData[0].map((raw) => {
    const colors = JSON.parse(`[${raw.colors}]`);
    const sizes = raw.sizes.split(",");
    const images = raw.images ? JSON.parse(raw.images) : [];
    return { ...raw, colors, sizes, images };
  });
  return filterData;
};

const getProductByType = async (req, res, category) => {
  const paging = req.query.paging ? parseInt(req.query.paging) : 0;
  const rawData = await getAllInfo(category, paging);
  const data = handleInfo(rawData);
  console.log(data);
};

const renderHomePage = async (req, res) => {
  const products = await getAllProducts();
  return res.render("homepage", { products });
};

module.exports = {
  createProduct,
  createProductItem,
  renderHomePage,
  getProductByType,
};
