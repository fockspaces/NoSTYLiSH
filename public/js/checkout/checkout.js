// Initialize the TapPay SDK with your App ID and App Key
TPDirect.setupSDK(
  12348,
  "app_pa1pQcKoY22IlnSXq5m5WP5jFKzoRG58VEXpT7wU62ud7mMbDOGzCYIlzzLF",
  "sandbox"
);

// Use the TapPay SDK to render the card fields
TPDirect.card.setup({
  fields: fields,
  styles: styles,
  isMaskCreditCardNumber: true,
  maskCreditCardNumberRange: {
    beginIndex: 6,
    endIndex: 11,
  },
});

// Get the prime from the TapPay server
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", onSubmit);

// Add the Bootstrap focus style to the TapPay fields when they are focused
document.querySelectorAll(".tpfield").forEach((field) => {
  field.addEventListener("focus", () => {
    field.classList.add("tappay-field-focus");
  });
  field.addEventListener("blur", () => {
    field.classList.remove("tappay-field-focus");
  });
});

TPDirect.card.onUpdate(errorHandler);
