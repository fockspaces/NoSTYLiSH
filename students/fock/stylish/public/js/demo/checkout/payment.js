const sendPayment = async (prime) => {
  const body = prepareBody(prime);
  const jwtToken = localStorage.getItem("access_token");
  // Define the request headers and access token
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`,
  };

  try {
    const result = await axios.post("/api/1.0/order/checkout", body, {
      headers,
    });
    console.log(result.data);
    alert("Payment successful! Thank you for your purchase.");

    // clearout cart
    localStorage.removeItem("cart_list");
    localStorage.removeItem("cart_number");

    // go to thankyou page
    window.location.href = "/thankyou";
  } catch (e) {
    console.error(e.message);
    alert(
      "There was an error processing your payment. Please check your card info."
    );
  }
};

const prepareBody = (prime) => {
  // get list from cart
  const list = JSON.parse(localStorage.getItem("cart_list")) || [];
  // get recipient from user
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const recipient = { ...user, phone: "", address: "", time: "" };

  // define freight ($5) and calculate total and subtotal
  const freight = 5;
  const total = list.reduce((total, product) => {
    return total + product.price * product.qty;
  }, 0);
  const subtotal = total - freight;

  const body = {
    prime,
    order: {
      shipping: "delivery",
      payment: "credit_card",
      subtotal,
      freight,
      total,
      recipient,
      list,
    },
  };
  return body;
};

export { sendPayment };
