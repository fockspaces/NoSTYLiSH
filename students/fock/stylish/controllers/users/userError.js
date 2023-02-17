const catchAsync = require("../../utils/catchAsync");

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

const checkContentType = catchAsync((req, res) => {
  const content_type = req.headers["content-type"];
  if (content_type !== "application/json")
    return res
      .status(400)
      .send({ err: "wrong request content-type", content_type });
  return true;
});

module.exports = { hasRequiredField, checkContentType };
