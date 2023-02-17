const catchAsync = require("../../utils/catchAsync");

const OAuthSignIn = catchAsync(async (req, res) => {
  return res.status(200).send("sd");
});

const renderSignIn = catchAsync(async (req, res) => {
  return res.render("users/loginPage");
});

module.exports = { OAuthSignIn, renderSignIn };
