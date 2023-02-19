// Define the request headers and access token
const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer [Access Token]", // Replace with your actual access token
};

// Define the request body with the payment information and order details
const requestBody = {
  prime: "[Prime Key from TapPay]",
  order: {
    shipping: "delivery",
    payment: "credit_card",
    subtotal: "[Price excluded Freight Fee]",
    freight: "[Freight Fee]",
    total: "[Final Price]",
    recipient: {
      name: "[Name]",
      phone: "[Phone]",
      email: "[Email]",
      address: "[Post Address]",
      time: "morning" | "afternoon" | "anytime",
    },
    list: [
      {
        id: "[Product ID]",
        name: "[Product Name]",
        price: "[Product Unit Price]",
        color: {
          name: "[Product Variant Color Name]",
          code: "[Product Variant Color HexCode]",
        },
        size: "[Product Variant Size]",
        qty: " [Quantity]",
      },
    ],
  },
};

// Make the HTTP POST request to the /order/checkout endpoint using Axios
const sendPayment = async () => {
  await axios
    .post("/api/1.0/order/checkout", requestBody, { headers })
    .then((response) => {
      // Handle successful response from server-side API
      console.log(response);
      // Display success message to user
      alert("Payment successful! Thank you for your purchase.");
    })
    .catch((error) => {
      // Handle error response from server-side API
      console.error(error);
      // Display error message to user
      alert(
        "There was an error processing your payment. Please try again or contact customer support."
      );
    });
};
