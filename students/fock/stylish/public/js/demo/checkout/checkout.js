import { displayCartList, displayTotalPrice, cartList } from "./renderCart.js";
import { setup } from "./paymentHandler.js";

// checkout if login
const jwtToken = localStorage.getItem("access_token");
if (!jwtToken) {
  alert("please login");
  window.location.href = "/login";
}

// render cart and card form
displayCartList(cartList);
displayTotalPrice(cartList);

// handle click button
setup();
