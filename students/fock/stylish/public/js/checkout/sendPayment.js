const prime = localStorage.getItem("prime");
console.log(prime);
// Define the request body with the payment information and order details
const requestBody = {
  prime,
  order: {
    shipping: "delivery",
    payment: "credit_card",
    subtotal: 1234,
    freight: 14,
    total: 1300,
    recipient: {
      name: "Luke",
      phone: "0987654321",
      email: "luke@gmail.com",
      address: "市政府站",
      time: "morning",
    },
    list: [
      {
        id: "1",
        name: "活力花紋長筒牛仔褲",
        price: 1299,
        color: {
          code: "B30000",
          name: "Dark_red",
        },
        size: "M",
        qty: 1,
      },
      {
        id: "1",
        name: "活力花紋長筒牛仔褲",
        price: 1299,
        color: {
          code: "CCB300",
          name: "Yellow",
        },
        size: "L",
        qty: 5,
      },
    ],
  },
};

// Make the HTTP POST request to the /order/checkout endpoint using Axios
const sendPayment = async (jwtToken) => {
  // Define the request headers and access token
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`, // Replace with your actual access token
  };

  try {
    const result = await axios.post("/api/1.0/order/checkout", requestBody, {
      headers,
    });
    console.log(result.data);
    alert("Payment successful! Thank you for your purchase.");
  } catch (e) {
    console.error(e.message);
    alert(
      "There was an error processing your payment. Please check your card info."
    );
  }

  // await axios
  //   .post("/api/1.0/order/checkout", requestBody, { headers })
  //   .then((response) => {
  //     // Handle successful response from server-side API
  //     console.log(response);
  //     // Display success message to user
  //     alert("Payment successful! Thank you for your purchase.");
  //   })
  //   .catch((error) => {
  //     // Handle error response from server-side API
  //     console.error(error);
  //     // Display error message to user
  //     alert(
  //       "There was an error processing your payment. Please try again or contact customer support."
  //     );
  //   });
};
