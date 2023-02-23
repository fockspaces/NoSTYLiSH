const fetchDataBycategory = async (category, paging) => {
  // get current URL
  const currentUrl = window.location.href;

  // create new URL based on current URL
  const newUrl = currentUrl.replace(/category=[^&]*/, `category=${category}`);

  try {
    // Send an Axios request to your API server with the category
    const endpoint = `http://52.194.142.24/api/1.0/products/${category}${
      paging ? `?paging=${paging}` : ""
    }`;
    const response = await axios.get(endpoint);
    // Process the search results
    renderProducts(response.data.data);

    // update the URL without redirecting
    window.history.pushState(null, null, newUrl);

    return {
      data: response.data.data,
      next_paging: response.data.next_paging,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const renderProducts = (products) => {
  const productContainer = document.querySelector("#product-container");
  let html = "";
  products.forEach((product) => {
    const colorOptionsHtml = product.colors
      .map(
        (color) => `
        <div class="form-check form-check-inline" style="background-color: #${color.code}">
          <label class="form-check-label" for="${color.name}"></label>
        </div>
      `
      )
      .join("");
    html += `
        <div class="col-md-4 mt-5 mb-5">
          <div class="card mt-2 product-card">
            <img class="card-img-top" src="${product.main_image}" alt="img">
            <div class="card-body">
              <h5 class="card-title"><a class="link-dark" href="#">${
                product.title
              }</a></h5>
              <p class="card-text">${product.description.slice(0, 50)}...</p>
              <div class="color-options">${colorOptionsHtml}</div>
            </div>
          </div>
        </div>
      `;
  });
  productContainer.innerHTML = html;
};

// Call the fetchData() function
const initializePage = async () => {
  const data = await fetchDataBycategory(category, paging);
  if (!data) return console.log("out of page");
  renderProducts(data.data);
};
initializePage();

categories.forEach((category) => {
  const catLink = document.getElementById(`${category}-link`);
  catLink.addEventListener("click", async (e) => {
    e.preventDefault();
    paging = 0;
    const data = await fetchDataBycategory(category, paging);
    if (!data) return console.log("out of page");

    renderProducts(data.data);
  });
});
