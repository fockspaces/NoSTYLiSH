const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
const nameRegex = /^[a-zA-Z0-9\s]{3,}$/;

const validateSignup = (email, password, name) => {
  const errors = {};
  if (!email || !email.match(emailRegex)) {
    errors.email = "Invalid email address";
  }
  if (!password || !password.match(passwordRegex)) {
    errors.password =
      "Password must be at least 8 characters long and include only letters and numbers";
  }
  if (!name || !name.match(nameRegex)) {
    errors.name =
      "Name must be at least 3 characters long and include only letters, numbers, and spaces";
  }
  return errors;
};

const validateOrder = (order) => {
  const inputs = [
    "shipping",
    "payment",
    "subtotal",
    "freight",
    "total",
    "recipient_id",
  ];

  const missings = inputs.filter((input) => {
    return !Object.keys(order).includes(input) || order[input] === "";
  });
  return missings;
};

module.exports = { validateSignup, validateOrder };
