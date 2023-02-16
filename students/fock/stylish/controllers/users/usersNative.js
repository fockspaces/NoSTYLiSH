const { searchUserByEmail, createUser } = require("../../models/User/User");
const { hasRequiredField } = require("./userError");
const { getJwtToken } = require("../../utils/jwt");

const handleSignUp = async (req, res) => {
  // content type validation
  const content_type = req.headers["content-type"];
  if (content_type !== "application/json")
    return res
      .status(400)
      .send({ err: "wrong request content-type", content_type });

  // check required fields exists
  const user = req.body;
  const requiredMeet = hasRequiredField(user);
  if (!requiredMeet)
    return res.status(400).send({ err: "missing required fields" });

  // check email exists
  const findUser = await searchUserByEmail(user.email);
  if (findUser) return res.status(403).send({ err: "user already exsists" });

  // signup
  const userId = await createUser(user);
  const { name, email } = user;
  const newUser = { userId, name, email };

  // get JWT token
  const access_expired = "7d";
  const access_token = getJwtToken(newUser, access_expired);
  console.log(access_token);

  return res.status(200).send({
    message: "sign up succesfully",
    data: { access_token, access_expired, user: newUser },
  });
};

module.exports = { handleSignUp };
