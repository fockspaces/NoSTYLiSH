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
    element: document.getElementById("card-expiration-date"),
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
    alert("get prime success, prime: " + result.card.prime);

    // Send prime and other order information to Order Check Out API
    // Pay By Prime Docs: https://docs.tappaysdk.com/tutorial/zh/back.html#pay-by-prime-api
  });
};

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