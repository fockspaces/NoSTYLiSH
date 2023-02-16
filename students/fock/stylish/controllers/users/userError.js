const hasRequiredField = (user) => {
  const requiredFields = ["name", "email", "password"];
  let isValid = true;

  requiredFields.forEach((field) => {
    if (!user[field]) {
      isValid = false;
    }
  });
  return isValid;
};

module.exports = { hasRequiredField };
