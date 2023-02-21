const { orderCreate } = require("./orderCreate");
const { validateOrder } = require("../../utils/inputValidation");
const { TapPay } = require("../../utils/tappay");
const { GetRecipient, updateOrder } = require("../../models/Order/Order");

const renderCheckoutPage = (req, res) => {
  return res.render("orders/checkout");
};

const checkoutHandler = async (req, res) => {
  // fetch each item in list

  // check the item is enougn in the inventory

  // update inventory

  // fetch order from body and check
  const { order } = req.body;
  const inValids = validateOrder(order);
  if (inValids.length)
    return res.status(400).send({ err: "missing values", inValids });

  // create order
  const orderId = await orderCreate(order);

  // create item_lists



  // fetch recipient
  const recipient = await GetRecipient(order.recipient_id);
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
