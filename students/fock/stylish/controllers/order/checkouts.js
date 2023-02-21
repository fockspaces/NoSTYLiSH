const { orderCreate } = require("./orderCreate");
const { TapPay } = require("../../utils/tappay");
const {
  GetRecipient,
  updateOrder,
  itemListCreate,
} = require("../../models/Order/Order");

const renderCheckoutPage = (req, res) => {
  return res.render("orders/checkout");
};

const checkoutHandler = async (req, res) => {
  // todo :
  // fetch each item in list

  // check the item is enough in the inventory

  // update inventory

  // fetch order from body and check
  const { order } = req.body;

  // create order
  const orderId = await orderCreate(order);
  if (!orderId)
    return res
      .status(400)
      .send({ err: "missing some values while creating order" });

  // create item_lists
  const { list } = req.body;
  if (!list.length) return res.status(400).send({ err: "lack of items" });

  const listResult = await itemListCreate(orderId, list);
  if (!listResult)
    return res.status(400).send({ err: "items inserting failed" });

  // fetch recipient
  const recipient = await GetRecipient(order.recipient);
  if (!recipient) return res.status(404).send({ err: "recipient not found" });

  // prime error handling
  const { prime } = req.body;
  if (!prime || !prime.length)
    return res.status(400).send({ err: "missing prime token" });
  // get prime and send it to TapPay
  const paymentResult = await TapPay(prime, { ...order, orderId }, recipient);

  // payment failed
  if (paymentResult.status !== 0) {
    return res
      .status(400)
      .send({ err: `Payment failed : ${paymentResult.msg}` });
  }

  // if success, create payment with status "processed"
  const updateStatus = await updateOrder(orderId);
  if (!updateStatus)
    return res.status(400).send({ err: "error on update order" });

  // failed, give back items from item_list to inventory

  // otherwise, send error
  return res.status(200).send({ data: { number: orderId } });
};

module.exports = { renderCheckoutPage, checkoutHandler };
