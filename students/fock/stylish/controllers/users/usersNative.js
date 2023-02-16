const { searchUserByEmail, createUser } = require("../../models/User/User");
const { hasRequiredField } = require("./userError");

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
  if (findUser) return res.status(400).send({ err: "user already exsists" });

  // signup
  const userId = await createUser(user);

  return res.status(201).send({ message: "sign up succesfully", userId });
};

module.exports = { handleSignUp };
