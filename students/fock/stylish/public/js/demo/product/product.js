import { fetchItemByID } from "./fetchItem.js";
import { renderProductDetails } from "./details.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id") || "";

const initialize = async () => {
  const product = await fetchItemByID(id);
  renderProductDetails(product);
};

initialize();
