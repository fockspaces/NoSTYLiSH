const { GetPayments } = require("../../models/Report/Report");

const paymentsHandler = async (req, res) => {
  try {
    const paymentMap = new Map();
    const result = await GetPayments();
    // Aggregate total payments for each user
    result.forEach((data) => {
      const userId = data.recipient_id;
      const total = parseFloat(data.total);

      if (!paymentMap.has(userId)) {
        paymentMap.set(userId, total);
      } else {
        paymentMap.set(userId, paymentMap.get(userId) + total);
      }
    });

    // Convert map to array of objects
    const paymentArray = [...paymentMap.entries()].map(
      ([userId, totalPayment]) => ({
        user_id: userId,
        total_payment: totalPayment.toFixed(2),
      })
    );

    return res.json({ data: paymentArray });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { paymentsHandler };
