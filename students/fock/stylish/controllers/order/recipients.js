const { GetRecipient, CreateRecipient } = require("../../models/Order/Order");

const recipientHandler = async (recipient) => {
  let recipientID;
  if (typeof recipient == "number") {
    recipientID = order.recipient;
  }

  if (typeof recipient == "object") {
    recipientID = await CreateRecipient(recipient);
  }

  const recipientInfo = await GetRecipient(recipientID);
  return recipientInfo;
};

module.exports = { recipientHandler };
