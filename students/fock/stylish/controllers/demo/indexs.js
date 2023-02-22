const { getAllInfo } = require("../../models/Product/Product");
const { imagePathConverter } = require("../../utils/infofilter");

const renderIndexPage = async (req, res) => {
  // fetch query string
  const paging = req.query.paging ? parseInt(req.query.paging) : 0;
  const category = req.query.category ? req.query.category : "all";

  // fetch products with category and paging (default to all)
  if (isNaN(paging) || paging < 0)
    return res.status(400).send({ err: "invalid paging" });
  const filterData = await getAllInfo(category, paging);
  if (filterData.data.length === 0)
    return res.status(404).send({ err: "page not found" });

  // convert image path
  const products = imagePathConverter(filterData.data);

  // fetch campaign data (catch the first three)


  return res.render("./demo/index", { products });
};

module.exports = { renderIndexPage };
