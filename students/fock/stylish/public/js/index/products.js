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

export { renderProducts };