const fetchDataBycategory = async (category, paging) => {
  const endpoint = `http://52.194.142.24/api/1.0/products/${category}${
    paging ? `?paging=${paging}` : ""
  }`;

  try {
    const response = await axios.get(endpoint);
    return {
      data: response.data.data,
      next_paging: response.data.next_paging,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const renderProducts = (products) => {
  const productContainer = document.querySelector(".row");
  let html = "";
  products.forEach((product) => {
    html += `
        <div class="col-md-4">
          <div class="card mt-2">
            <img class="card-img-top" src="${
              product.main_image
            }" alt="img" width="50" height="400">
            <div class="card-body">
              <h5 class="card-title"><a class="link-dark" href="#">${
                product.title
              }</a></h5>
              <p class="card-text">${product.description.slice(0, 50)}...</p>
            </div>
          </div>
        </div>
      `;
  });
  productContainer.innerHTML = html;
};

const categories = ["all", "women", "men", "accessories"];
// Call the fetchData() function
const initializePage = async () => {
  if (!categories.includes(category)) console.log("category not found");
  const data = await fetchDataBycategory(category);
  renderProducts(data.data);
};
initializePage();

categories.forEach((category) => {
  const catLink = document.getElementById(`${category}-link`);
  catLink.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = await fetchDataBycategory(category);
    renderProducts(data.data);
  });
});
