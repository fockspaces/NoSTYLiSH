import { displayCartList, displayTotalPrice, cartList } from "./renderCart.js";
import { setup } from "./paymentHandler.js";

// check if login
const jwtToken = localStorage.getItem("access_token");
if (!jwtToken) {
  alert("please login");
  window.location.href = "/login";
}

// check if cart is not empty
if (!cartList.length) {
  alert("cart is empty");
  window.location.href = "/index";
}

// render cart and card form
displayCartList(cartList);
displayTotalPrice(cartList);

// handle click button
setup();
