const { searchUserByEmail, createUser } = require("../../models/User/User");
const { hasRequiredField } = require("./userError");
const { getJwtToken } = require("../../utils/jwt");
const { comparePassword } = require("../../utils/bcrypt");
const { passwordFilter } = require("../../utils/infofilter");
const { validateSignup } = require("../../utils/inputValidation");

const nativeSignUp = async (req, res) => {
  // check required fields exists
  const { name, email, password, role_id } = req.body;
  const requiredMeet = hasRequiredField({ name, email, password });
  if (!requiredMeet)
    return res.status(400).send({ err: "missing required fields" });

  const invalids = validateSignup(email, password, name);
  if (Object.values(invalids).length)
    return res.status(400).send({ err: invalids });

  // check email exists
  const findUser = await searchUserByEmail(email);
  if (findUser) return res.status(403).send({ err: "user already exsists" });

  // signup
  const userId = await createUser({
    name,
    email,
    password,
    provider: "native",
    role_id,
  });
  const newUser = { id: userId, email, role_id };

  // get JWT token
  const access_expired = process.env.JWT_EXPIRED;
  const access_token = getJwtToken(newUser);
  res.cookie("access_token", `Bearer ${access_token}`, { httpOnly: true });

  const user = await searchUserByEmail(email);

  return res.status(200).send({
    data: { access_token, access_expired, user },
  });
};

const nativeSignIn = async (req, res) => {
  const { email, password } = req.body;

  // check user exists
  const findUser = await searchUserByEmail(email);
  if (!findUser) return res.status(403).send({ err: "user not found" });

  // verify password
  if (!(await comparePassword(password, findUser.password)))
    return res.status(403).send({ err: "wrong password" });

  // get JWT token
  const access_expired = process.env.JWT_EXPIRED;
  const access_token = getJwtToken({
    id: findUser.id,
    email: findUser.email,
    role_id: findUser.role_id,
  });
  res.cookie("access_token", `Bearer ${access_token}`, { httpOnly: true });

  // sending response
  const sendUser = passwordFilter(findUser);
  return res.status(200).send({
    data: {
      access_token,
      access_expired,
      user: sendUser,
    },
  });
};

module.exports = { nativeSignUp, nativeSignIn };
