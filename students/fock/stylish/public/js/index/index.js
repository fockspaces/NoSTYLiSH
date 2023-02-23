import { fetchDataBycategory } from "./category.js";
import { fetchDataByKeyword } from "./search.js";
import { renderProducts } from "./products.js";
import { renderCampaigns, fetchCampaigns } from "./campaigns.js";

const categories = ["all", "women", "men", "accessories"];

const urlSearchParams = new URLSearchParams(window.location.search);
const category = urlSearchParams.get("category") || "";
const keyword = urlSearchParams.get("keyword") || "";
const paging = parseInt(urlSearchParams.get("paging")) || 0;

const initialize = async () => {
  let products;
  if (keyword) {
    // render by keyword
    products = await fetchDataByKeyword(keyword, paging);
  }

  if (!keyword && category) {
    // render by category
    products = await fetchDataBycategory(category, paging);
  }

  // default
  if (!products) {
    products = await fetchDataBycategory("all", 0);
    console.log("out of page");
  }

  // render products
  renderProducts(products.data);

  const campaign = await fetchCampaigns();
  renderCampaigns(campaign);
};

initialize();
