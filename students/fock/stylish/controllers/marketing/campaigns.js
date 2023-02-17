const {
  addCampaign,
  getAllCampaigns,
} = require("../../models/Marketing/Marketing");
const { imagePath } = require("../../utils/infofilter");
const { searchProductById } = require("../../models/Product/Product");

const createCampaignProduct = async (req, res) => {
  // get data from req.body
  const { product_id, story } = req.body;
  // validate product_id
  const product = await searchProductById(product_id);
  if (!product || product.id != product_id)
    return res.status(404).send({ err: "product_id is invalid" });

  // process image file
  const pictureFile = req.file;
  const hostname = req.headers.host.split(":")[0];
  const picture = imagePath(hostname, pictureFile.filename);
  // insert data into db
  const info = await addCampaign({ product_id, picture, story });

  return res
    .status(200)
    .send({ message: "seuccessfully create a campaign product" });
};

const fetchCampaignList = async (req, res) => {
  const data = await getAllCampaigns();
  return res.status(200).send({ data });
};

const renderCampaignPage = async (req, res) => {
  return res.render("marketing/campaignCreate");
};

module.exports = {
  createCampaignProduct,
  renderCampaignPage,
  fetchCampaignList,
};
