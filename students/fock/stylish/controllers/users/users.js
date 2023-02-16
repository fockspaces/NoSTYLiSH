const { nativeSignUp, nativeSignIn } = require("./usersNative");
const { searchUserByEmail, createUser } = require("../../models/User/User");
const { hasRequiredField } = require("./userError");
const { getJwtToken } = require("../../utils/jwt");

const signupHandler = async (req, res) => {
  // content type validation
  const content_type = req.headers["content-type"];
  if (content_type !== "application/json")
    return res
      .status(400)
      .send({ err: "wrong request content-type", content_type });

    nativeSignUp(req, res);
};

const signInHandler = (req, res) => {};

module.exports = { signupHandler, signInHandler };
