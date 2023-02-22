const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category") ? urlParams.get("category") : "all";
const paging = urlParams.get("paging") ? urlParams.get("paging") : 0;


