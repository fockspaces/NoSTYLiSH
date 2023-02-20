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

module.exports = { validateSignup };
