const { orderCreate } = require("./orderCreate");

const renderCheckoutPage = (req, res) => {
  return res.render("orders/checkout");
};

const checkoutHandler = async (req, res) => {
  // fetch order from body
  const { order } = req.body;
  // create order
  const orderId = orderCreate(order);

  // prime error handling
  // get prime and send it to TapPay

  // if success, create payment with status "processed"

  // otherwise, create payment "failed" and send error

  return res.send("checkout");
};

module.exports = { renderCheckoutPage, checkoutHandler };
