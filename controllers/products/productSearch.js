const {
  getAllInfo,
  productSearch,
  productDetails,
} = require("../../models/Product/Product");

const { imagePathConverter } = require("../../utils/infofilter");

const searchCategory = async (req, res, category) => {
  const paging = req.query.paging ? parseInt(req.query.paging) : 0;
  if (isNaN(paging) || paging < 0)
    return res.status(400).send({ err: "invalid paging" });
  const filterData = await getAllInfo(category, paging);
  if (filterData.data.length === 0)
    return res.status(404).send({ err: "page not found" });

  // convert image path
  const data = imagePathConverter(filterData.data);
  return res
    .status(200)
    .send(
      filterData.hasMoreData ? { data, next_paging: paging + 1 } : { data }
    );
};

const searchKeyword = async (req, res) => {
  const { keyword } = req.query;
  if (!keyword)
    return res
      .status(200)
      .send({ err: "please provide some keyword to search" });
  const paging = req.query.paging ? parseInt(req.query.paging) : 0;
  const filterData = await productSearch(keyword, paging);

  if (filterData.data.length === 0)
    return res.status(404).send({ err: `no matched product or out of page` });
  const data = imagePathConverter(filterData.data);

  return res
    .status(200)
    .send(
      filterData.hasMoreData ? { data, next_paging: paging + 1 } : { data }
    );
};

const searchId = async (req, res) => {
  const { id } = req.query;
  if (!id)
    return res.status(400).send({ err: "please provide some id to search" });
  if (isNaN(id) || id < 1)
    return res.status(400).send({ err: "please provide a valid id to search" });
  const paging = req.query.paging ? parseInt(req.query.paging) : 0;
  const filterData = await productDetails(id, paging);
  if (!filterData) return res.status(404).send({ err: "not product found" });

  const data = imagePathConverter([filterData]);

  return res.status(200).send({ data });
};

module.exports = { searchCategory, searchId, searchKeyword };
