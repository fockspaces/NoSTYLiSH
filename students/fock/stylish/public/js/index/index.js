const categories = ["all", "women", "men", "accessories"];

let urlParams = new URLSearchParams(window.location.search);
let category = categories.includes(urlParams.get("category"))
  ? urlParams.get("category")
  : "all";
let paging = urlParams.get("paging") ? urlParams.get("paging") : 0;
let keyword = urlParams.get("keyword") ? urlParams.get("paging") : "";

