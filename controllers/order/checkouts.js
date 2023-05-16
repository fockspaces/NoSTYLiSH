const { TapPay } = require("../../utils/tappay");
const {
  UpdateOrder,
  ItemListCreate,
  AddOrder,
} = require("../../models/Order/Order");
const { recipientHandler } = require("./recipients");
const { itemListHandler } = require("./itemLists");

const renderCheckoutPage = (req, res) => {
  return res.render("orders/checkout");
};

const checkoutHandler = async (req, res) => {
  // todo :
  // fetch each item in list
  const { order } = req.body;
  if (!order) return res.status(400).send({ err: "missing order details" });

  // check the item is enough in the inventory

  // update inventory

  // fetch order from body and check

  // fetch recipient
  const recipient = await recipientHandler(order.recipient);
  const recipientID = recipient.id;
  if (!recipient) return res.status(404).send({ err: "recipient not found" });

  // create order
  const orderId = await AddOrder({ ...order, recipient: recipientID });
  if (!orderId)
    return res
      .status(400)
      .send({ err: "missing some values while creating order" });

  // create item_lists
  const { list } = order;
  if (!list || !list.length)
    return res.status(400).send({ err: "lack of items" });

  const listResult = await itemListHandler(orderId, list);
  if (!listResult)
    return res
      .status(400)
      .send({
        err: "The order cannot be placed due to insufficient inventory or unmatched product items",
      });

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
  const updateStatus = await UpdateOrder(orderId);
  if (!updateStatus)
    return res.status(400).send({ err: "error on update order" });

  // failed, give back items from item_list to inventory

  // otherwise, send error
  return res.status(200).send({ data: { number: orderId } });
};

module.exports = { renderCheckoutPage, checkoutHandler };
