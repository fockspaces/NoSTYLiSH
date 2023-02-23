import { fetchDataBycategory } from "./category.js";
import { fetchDataByKeyword } from "./search.js";
import { renderProducts } from "./products.js";

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

  if (category) {
    // render by category
    products = await fetchDataBycategory(category, paging);
  }

  // default
  products = products ? products : await fetchDataBycategory("all", paging);

  // render products

  // chang url
};

initialize();
