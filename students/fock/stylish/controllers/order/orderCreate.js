const { AddOrder } = require("../../models/Order/Order");

const orderCreate = async (order) => {
  // add an order to db
  const orderId = await AddOrder(order);
  // return
  return orderId;
};

module.exports = {
  orderCreate,
};
