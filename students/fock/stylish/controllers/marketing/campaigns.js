const {
  addCampaign,
  getAllCampaigns,
} = require("../../models/Marketing/Marketing");
const { searchProductById } = require("../../models/Product/Product");
const { imagePath } = require("../../utils/infofilter");
const { client } = require("../../utils/redis");

const createCampaignProduct = async (req, res) => {
  // get data from req.body
  const { product_id, story, start_date, end_date } = req.body;
  // validate product_id
  const product = await searchProductById(product_id);
  if (!product || product.id != product_id)
    return res.status(404).send({ err: "product_id is invalid" });

  // process image file
  const pictureFile = req.file;
  // const picture = pictureFile.filename;
  console.log(pictureFile);
  const picture = pictureFile.key.split("/").pop();

  // insert data into db
  const info = await addCampaign({
    product_id,
    picture,
    story,
    start_date,
    end_date,
  });

  // reset cache data
  await client.del("campaigns");

  return res
    .status(200)
    .send({ message: "seuccessfully create a campaign product" });
};

const fetchCampaignList = async (req, res) => {
  try {
    const data = await getAllCampaigns();
    const dataWithPath = data.map((data) => {
      const picture = imagePath(data.picture);
      return { ...data, picture };
    });

    // check if cache turn on
    if (client.status === "ready") {
      // save to cache if cache on
      await client.set("campaigns", JSON.stringify(dataWithPath));
    }

    console.log("db hit");
    return res.status(200).send({ data: dataWithPath });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ error: "Unable to fetch data" });
  }
};

const renderCampaignPage = async (req, res) => {
  return res.render("marketing/campaignCreate");
};

module.exports = {
  createCampaignProduct,
  renderCampaignPage,
  fetchCampaignList,
};
