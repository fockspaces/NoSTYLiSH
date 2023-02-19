// Initialize the TapPay SDK with your App ID and App Key
TPDirect.setupSDK(
  12348,
  "app_pa1pQcKoY22IlnSXq5m5WP5jFKzoRG58VEXpT7wU62ud7mMbDOGzCYIlzzLF",
  "sandbox"
);

// Use the TapPay SDK to render the card fields
TPDirect.card.setup({
  fields: {
    number: {
      element: "#card-fields .card-number",
      placeholder: "**** **** **** ****",
    },
    expirationDate: {
      element: "#card-fields .card-expiration-date",
      placeholder: "MM / YY",
    },
    ccv: {
      element: "#card-fields .card-ccv",
      placeholder: "CCV",
    },
  },
  styles: {
    input: {
      color: "gray",
    },
    ":focus": {
      color: "black",
    },
    ".valid": {
      color: "green",
    },
    ".invalid": {
      color: "red",
    },
  },
});

// Get the prime from the TapPay server
var checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", function () {
  TPDirect.card.getPrime(function (result) {
    if (result.status !== 0) {
      alert("Failed to get prime from TapPay server");
      return;
    }

    // Send the prime and other order information to the Order Check Out API to complete the payment
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/order/checkout");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      // handle the response from the server
    };
    xhr.onerror = function () {
      // handle errors
    };
    var data = JSON.stringify({
      prime: result.card.prime,
      order_info: {
        // include other order information such as amount, currency, product details, etc.
      },
    });
    xhr.send(data);
  });
});
