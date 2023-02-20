const renderCheckoutPage = (req, res) => {
  return res.render("orders/checkout");
};

const checkoutHandler = (req, res) => {};

module.exports = { renderCheckoutPage, checkoutHandler };
