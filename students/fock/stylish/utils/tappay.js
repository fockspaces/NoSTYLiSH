const tapPay = require("tappay-nodejs");

// Initialize the SDK with your credentials
tapPay.initialize({
  partner_key:
    "partner_PHgswvYEk4QY6oy3n8X3CwiQCVQmv91ZcFoD5VrkGFXo8N7BFiLUxzeG",
  merchant_id: "AppWorksSchool_CTBC",
  env: "sandbox",
});

const TapPay = async (prime, order, recipient) => {
  const payment_info = {
    prime,
    merchant_id: "AppWorksSchool_CTBC",
    orderId: order.orderId,
    amount: order.total,
    currency: "TWD",
    details: "[An apple and a pen.]",
    cardholder: {
      phone_number: recipient.phone,
      name: recipient.name,
      email: recipient.email,
    },
  };

  const paymentResult = await tapPay.payByPrime(payment_info);
  return paymentResult;
};

module.exports = { TapPay };
