// categories.forEach((category) => {
//   const catLink = document.getElementById(`${category}-link`);
//   catLink.addEventListener("click", async (e) => {
//     e.preventDefault();
//     paging = 0;
//     const data = await fetchDataBycategory(category, paging);
//     if (!data) return console.log("out of page");

//     renderProducts(data.data);
//   });
// });
