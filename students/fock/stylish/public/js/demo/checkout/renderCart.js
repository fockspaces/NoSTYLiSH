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
                  <button class="delete-btn" data-index="${index}">Delete</button>
                  </div>
            </div>
          </div>
        </li>
      `;
    })
    .join("");

  productListsContainer.innerHTML = `${productListsHtml}`;

  // Add event listener to delete-item button
  const deleteItemBtns = document.querySelectorAll(".delete-btn");
  deleteItemBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      let cartList = JSON.parse(localStorage.getItem("cart_list"));
      cartList.splice(index, 1);
      localStorage.setItem("cart_list", JSON.stringify(cartList));
      localStorage.setItem("cart_number", cartList.length);

      // check if cart is not empty
      if (!cartList.length) {
        alert("cart is empty");
        window.location.href = "/index";
      }

      // render cart and card form
      displayCartList(cartList);
      displayTotalPrice(cartList);
    });
  });
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

const onClick = () => {};

export { displayCartList, displayTotalPrice, cartList };
