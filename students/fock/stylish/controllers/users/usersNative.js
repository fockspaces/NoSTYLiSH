const { searchUserByEmail, createUser } = require("../../models/User/User");
const { hasRequiredField } = require("./userError");
const { getJwtToken } = require("../../utils/jwt");

const nativeSignUp = async (req, res) => {
  // check required fields exists
  const { name, email, password } = req.body;
  const requiredMeet = hasRequiredField({ name, email, password });
  if (!requiredMeet)
    return res.status(400).send({ err: "missing required fields" });

  // check email exists
  const findUser = await searchUserByEmail(email);
  if (findUser) return res.status(403).send({ err: "user already exsists" });

  // signup
  const userId = await createUser({ name, email, password });
  const newUser = { id: userId, name, email };

  // get JWT token
  const access_expired = "7d";
  const access_token = getJwtToken(newUser, access_expired);
  console.log(access_token);

  return res.status(200).send({
    message: "sign up succesfully",
    data: { access_token, access_expired, user: newUser },
  });
};

const nativeSignIn = (req, res) => {
  const { provider, email, password, access_token } = req.body;
};

module.exports = { nativeSignUp, nativeSignIn };
