const {
  FetchItemID,
  GetColorIDByCode,
  ItemListCreate,
} = require("../../models/Order/Order");

const itemListHandler = async (orderID, list) => {
  // check list type
  const isItemID = "product_item_id" in list[0];
  // convert to {product_item_id, qty} pairs
  const listPairs = isItemID ? list : await itemQtyPairs(list);
  if (!listPairs) return false;
  // create itemList in db
  const listResult = await ItemListCreate(orderID, listPairs);
  return listResult;
};

const itemQtyPairs = async (list) => {
  let pairs = [];
  for (const item of list) {
    // fetch the product id, color, size
    const { id, color, size, qty } = item;
    const colorID = await GetColorIDByCode(color.code);
    if (!colorID) return false;
    // find if there's match item for product
    const matchItemID = await FetchItemID(id, colorID, size);
    if (!matchItemID) return false;

    // return array of {product_item_id, qty}
    pairs.push({ product_item_id: matchItemID, qty });
  }
  return pairs;
};

module.exports = { itemListHandler };
