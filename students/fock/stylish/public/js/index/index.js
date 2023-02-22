const categories = ["all", "women", "men", "accessories"];

const urlParams = new URLSearchParams(window.location.search);
const category = categories.includes(urlParams.get("category"))
  ? urlParams.get("category")
  : "all";
const paging = urlParams.get("paging") ? urlParams.get("paging") : 0;
