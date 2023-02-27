import { sendPayment } from "./payment.js";
// config
const fields = {
  number: {
    // css selector
    element: "#card-number",
    placeholder: "**** **** **** ****",
    className: "form-control",
  },
  expirationDate: {
    // DOM object
    element: '#card-expiration-date',
    placeholder: "MM / YY",
    className: "form-control",
  },
  ccv: {
    element: "#card-ccv",
    placeholder: "ccv",
    className: "form-control",
  },
};

const styles = {
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
  // Media queries
  // Note that these apply to the iframe, not the root window.
  "@media screen and (max-width: 400px)": {
    input: {
      color: "orange",
    },
  },
};

// onSubmit
const onSubmit = (e) => {
  e.preventDefault();

  // Get TapPay Fields  status
  const tappayStatus = TPDirect.card.getTappayFieldsStatus();

  // Check can getPrime
  if (tappayStatus.canGetPrime === false) {
    alert("can not get prime");
    return;
  }

  // Get prime
  TPDirect.card.getPrime((result) => {
    if (result.status !== 0) {
      alert("get prime error " + result.msg);
      return;
    }

    sendPayment(result.card.prime);
    // Send prime and other order information to Order Check Out API
  });
};

// onUpdate
const errorHandler = (update) => {
  if (update.canGetPrime) {
    // If the prime can be obtained, enable the checkout button
    document.getElementById("checkout-button").removeAttribute("disabled");
  } else {
    // If the prime cannot be obtained, disable the checkout button
    document.getElementById("checkout-button").setAttribute("disabled", true);
  }

  // Handle errors in the different fields
  handleFieldStatus("number", update.status.number);
  handleFieldStatus("expiration-date", update.status.expiry);
  handleFieldStatus("ccv", update.status.ccv);
};

// Helper function to handle the status of a single field
function handleFieldStatus(fieldName, status) {
  const field = document.getElementById(`card-${fieldName}`);
  if (status === 2) {
    // If the field has an error, add the is-invalid class
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
  } else if (status === 0) {
    // If the field is valid, add the is-valid class
    field.classList.add("is-valid");
    field.classList.remove("is-invalid");
  } else {
    // If the field is neither valid nor invalid, remove the is-valid and is-invalid classes
    field.classList.remove("is-valid");
    field.classList.remove("is-invalid");
  }
}

const setup = () => {
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
  TPDirect.card.onUpdate(errorHandler);
};


export { setup };
