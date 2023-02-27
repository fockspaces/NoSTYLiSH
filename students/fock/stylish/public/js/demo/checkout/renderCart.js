// Get cart list from local storage
const cartList = JSON.parse(localStorage.getItem("cart_list")) || [];
function displayCartList(cartList) {
  const productListsContainer = document.querySelector(
    "#product-lists-container"
  );
  const productListsHtml = cartList
    .map((product, index) => {
      return `
        <li>
          <div class="card">
          <div class="card-image">
            <img src="${product.image}" alt="${product.title}">
          </div>
          <div class="card-details">
              <h3 class="card-title">${product.title}</h3>
              <p class="card-description">${product.description}</p>
              <div class="card-qty-price">
                  <div class="card-qty">
                    Quantity: ${product.qty}
                  </div>
                  <div class="card-price">
                    $${(Number(product.price) * product.qty).toFixed(2)}
                  </div>
              </div>
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
    <div class="card text-left">
      <div class="card-body">
        <h5>Total: $${totalPrice.toFixed(2)}</h5>
      </div>
    </div>
  `;

  orderSummaryContainer.innerHTML = orderSummaryHtml;
}


export { displayCartList, displayTotalPrice, cartList };
