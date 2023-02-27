import { displayCartList, displayTotalPrice, cartList } from "./renderCart.js";
import { setup } from "./paymentHandler.js";

async function checkLogin() {
  // check if there's auth_token
  const access_token = localStorage.getItem("access_token");
  const url = "api/1.0/user/profile";

  try {
    // verify token and get profile
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    // login, return true
    return true;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    // no, go to signup / login page
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
}

const checkout = async () => {
  // check if login
  await checkLogin();

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
};

checkout();
