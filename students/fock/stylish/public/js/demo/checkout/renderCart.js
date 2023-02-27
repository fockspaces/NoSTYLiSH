// Get cart list from local storage
const cartList = JSON.parse(localStorage.getItem("cart_list")) || [];

// Function to display products in cart list
function displayCartList(cartList) {
  const productListsContainer = document.querySelector(
    "#product-lists-container"
  );
  const productListsHtml = cartList
    .map((product, index) => {
      return `
        <li>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">Quantity: ${product.qty}</p>
              <p class="card-text">Price: $${Number(product.price).toFixed(
                2
              )}</p>
            </div>
          </div>
        </li>
      `;
    })
    .join("");

  productListsContainer.innerHTML = `<ul>${productListsHtml}</ul>`;
}

// Function to display total price of all products in cart list
function displayTotalPrice(cartList) {
  const totalPrice = cartList.reduce((total, product) => {
    return total + product.price * product.qty;
  }, 0);

  const orderSummaryContainer = document.querySelector("#order-summary");
  const orderSummaryHtml = `
    <h5>Total: $${totalPrice.toFixed(2)}</h5>
  `;

  orderSummaryContainer.innerHTML = orderSummaryHtml;
}

export { displayCartList, displayTotalPrice, cartList };
