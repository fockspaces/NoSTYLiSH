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

// Call the fetchData() function
fetchDataBycategory("all").then((data) => {
  const products = data.data;
  // Render the product data in your template
  const productContainer = document.querySelector(".row");
  products.forEach((product) => {
    console.log(product.main_image);
    const productCard = document.createElement("div");
    productCard.className = "col-md-4";
    productCard.innerHTML = `
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
      `;
    productContainer.appendChild(productCard);
  });
});
