import { activateBtn } from "./acivatebtn.js";
const renderProductDetails = (product) => {
  const productContainer = document.querySelector("#product-container");

  // Create the HTML for the product details
  const html = `
      <div class="col-lg-6">
        <img id="main-image" src="${product.main_image}" alt="${
    product.title
  }" height="500px">
      </div>
      <div class="col-lg-6">
        <h1 id="title">${product.title}</h1>
        <div id="price">NT$ ${Number(product.price).toFixed(2)}</div>
        <div id="color-options">
          <h3>Color:</h3>
          ${product.colors
            .map(
              (color) => `
            <div class="color-option">
              <input type="checkbox" id="${color.name}" value="${color.code}">
              <label for="${color.name}" style="background-color: #${color.code}"></label>
            </div>
          `
            )
            .join("")}
        </div>

        <div id="size-options">
          <h3>Size:</h3>
          ${product.sizes
            .map(
              (size) => `
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="size" id="${size}" value="${size}">
              <label class="form-check-label" for="${size}">${size}</label>
            </div>
          `
            )
            .join("")}
        </div>
        <div id="quantity">
          <h3>Quantity:</h3>
          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" id="minus-btn">-</button>
            <input type="text" class="form-control" id="quantity-input" value="1" aria-label="Quantity">
            <button class="btn btn-outline-secondary" type="button" id="plus-btn">+</button>
          </div>
        </div>
        <button id="add-to-cart" class="btn btn-primary">Add to Cart</button>
        <div id="other-details">
          <h3>Details:</h3>
          <ul>
            <li>Texture: ${product.texture}</li>
            <li>Wash: ${product.wash}</li>
            <li>Place: ${product.place}</li>
            <li>Note: ${product.note}</li>
            <li>Story: ${product.story}</li>
          </ul>
        </div>
      </div>
    `;

  // Add the product details HTML to the container
  productContainer.innerHTML = html;
  activateBtn(product);
};




export { renderProductDetails };
