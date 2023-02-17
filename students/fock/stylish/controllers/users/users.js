const { nativeSignUp, nativeSignIn } = require("./usersNative");
const { OAuthSignIn } = require("./userOAuth");
const { profileHandler } = require("./userProfile");

const { searchUserByEmail, createUser } = require("../../models/User/User");
const { hasRequiredField, checkContentType } = require("./userError");
const { getJwtToken } = require("../../utils/jwt");

const catchAsync = require("../../utils/catchAsync");

const signupHandler = catchAsync(async (req, res) => {
  // content type validation
  checkContentType(req, res);

  nativeSignUp(req, res);
});

const signInHandler = catchAsync((req, res) => {
  console.log(req.body);
  // content type validation
  checkContentType(req, res);

  const { provider } = req.body;
  if (provider == "native") return nativeSignIn(req, res);

  // todo : OAuth login
  if (provider == "facebook") return OAuthSignIn(req, res);

  return res.status(400).send({ err: "wrong provider name" });
});

module.exports = { signupHandler, signInHandler, profileHandler };
