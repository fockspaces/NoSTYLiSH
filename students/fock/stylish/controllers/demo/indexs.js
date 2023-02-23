const { getAllInfo } = require("../../models/Product/Product");
const { imagePathConverter } = require("../../utils/infofilter");

const renderIndexPage = async (req, res) => {
  // fetch campaign data (catch the first three)

  return res.render("./demo/index");
};

module.exports = { renderIndexPage };
