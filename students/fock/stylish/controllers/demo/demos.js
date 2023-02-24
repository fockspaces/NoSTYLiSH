const renderIndexPage = async (req, res) => {
  return res.render("./demo/index");
};

const renderItemPage = async (req, res) => {
  return res.render("./demo/product");
};

module.exports = { renderIndexPage, renderItemPage };
