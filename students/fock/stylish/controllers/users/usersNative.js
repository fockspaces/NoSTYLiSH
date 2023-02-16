const { searchUserByEmail, createUser } = require("../../models/User/User");
const { hasRequiredField } = require("./userError");
const { getJwtToken } = require("../../utils/jwt");
const { comparePassword } = require("../../utils/bcrypt");

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
  const newUser = { id: userId, email };

  // get JWT token
  const access_expired = process.env.JWT_EXPIRED;
  const access_token = getJwtToken(newUser);
  console.log(access_token);

  return res.status(200).send({
    message: "signup succesfully",
    data: { access_token, access_expired, user: newUser },
  });
};

const nativeSignIn = async (req, res) => {
  const { email, password, provider } = req.body;

  // check user exists
  const findUser = await searchUserByEmail(email);
  if (!findUser) return res.status(403).send({ err: "user not found" });

  // verify password
  if (!(await comparePassword(password, findUser.password)))
    return res.status(403).send({ err: "wrong password" });

  // get JWT token
  const access_expired = process.env.JWT_EXPIRED;
  const access_token = getJwtToken({ id: findUser.id, email: findUser.email });

  // sending response
  const { id, name } = findUser;
  return res.status(200).send({
    message: "signin succesfully",
    data: { access_token, access_expired, user: { id, provider, name, email } },
  });
};

module.exports = { nativeSignUp, nativeSignIn };