import { fetchItemByID } from "./fetchItem.js";
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id") || "";


const initialize = async () => {
  const data = await fetchItemByID(id);
  console.log(data);
};

initialize();