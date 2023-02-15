const {
  insertProduct,
  insertItem,
  getAllProducts,
  getAllInfo,
  productSearch,
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

const getProductByType = async (req, res, category) => {
  const paging = req.query.paging ? parseInt(req.query.paging) : 0;
  if (isNaN(paging) || paging < 0)
    return res.status(400).send({ err: "invalid paging" });
  const filterData = await getAllInfo(category, paging);
  if (filterData.data.length === 0)
    return res.status(404).send({ err: "page not found" });
  const data = filterData.data;
  return res
    .status(200)
    .send(
      filterData.hasMoreData ? { data, next_paging: paging + 1 } : { data }
    );
};

const handleSearch = async (req, res) => {
  const { keyword } = req.query;
  if (!keyword)
    return res
      .status(200)
      .send({ err: "please provide some keyword to search" });
  const paging = req.query.paging ? parseInt(req.query.paging) : 0;
  const filterData = await productSearch(keyword, paging);

  if (filterData.data.length === 0)
    return res
      .status(404)
      .send({ err: `no matched product with keyword : ${keyword}` });
  const data = filterData.data;
  return res
    .status(200)
    .send(
      filterData.hasMoreData ? { data, next_paging: paging + 1 } : { data }
    );
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
  handleSearch,
};
