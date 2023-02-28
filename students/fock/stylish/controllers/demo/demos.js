const renderIndexPage = async (req, res) => {
  return res.render("demo/index");
};

const renderItemPage = async (req, res) => {
  return res.render("demo/product");
};

const renderProfile = async (req, res) => {
  
  return res.render("demo/profile");
};

const renderLogin = async (req, res) => {
  return res.render("demo/signin");
};

const renderSignup = async (req, res) => {
  return res.render("demo/signup");
};

const renderCheckout = async (req, res) => {
  return res.render("demo/checkout");
};

const renderThankyou = async (req, res) => {
  return res.render("demo/thankyou");
};

module.exports = {
  renderIndexPage,
  renderItemPage,
  renderProfile,
  renderLogin,
  renderSignup,
  renderCheckout,
  renderThankyou,
};
