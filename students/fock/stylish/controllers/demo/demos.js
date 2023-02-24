const renderIndexPage = async (req, res) => {
  return res.render("./demo/index");
};

const renderItemPage = async (req, res) => {
  return res.render("./demo/product");
};

const renderProfile = async (req, res) => {
  return res.render("./demo/profile");
};

const renderLoginOptions = async (req, res) => {
  return res.render("./demo/loginOptions");
};

const renderLogin = async (req, res) => {
  return res.render("./demo/signin");
};

const renderSignup = async (req, res) => {
  return res.render("./demo/signup");
};

module.exports = {
  renderIndexPage,
  renderItemPage,
  renderProfile,
  renderLoginOptions,
  renderLogin,
  renderSignup,
};
