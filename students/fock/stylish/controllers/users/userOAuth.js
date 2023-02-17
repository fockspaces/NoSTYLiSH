const axios = require("axios");

const catchAsync = require("../../utils/catchAsync");
const { getJwtToken } = require("../../utils/jwt");
const { passwordFilter } = require("../../utils/infofilter");

const {
  searchUserById,
  createUser,
  searchUserByEmail,
} = require("../../models/User/User");

const OAuthSignIn = async (req, res) => {
  const { access_token } = req.body;
  if (!access_token)
    return res.status(400).send({ err: "please provide a token" });

  // fetch user profile with token
  const { data } = await axios.get(
    `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${access_token}`
  );
  const { name, email } = data;
  const picture = data.picture.data.url ? data.picture.data.url : "";
  console.log(picture);

  // check user exists
  const user = await searchUserByEmail(email);
  let newUser;
  if (!user) {
    console.log("signup for facebook account");
    // signup
    const userId = await createUser({
      name,
      email,
      picture,
      provider: "facebook",
    });
    newUser = { id: userId, email };
  }

  // get JWT token
  newUser = newUser ? newUser : { id: user.id, email };
  const access_expired = process.env.JWT_EXPIRED;
  const JWT_token = getJwtToken(newUser);

  const sendUser = user
    ? passwordFilter(user)
    : passwordFilter({
        id: newUser.id,
        name,
        email,
        picture,
        provider: "facebook",
      });

  return res.status(200).send({
    data: { access_expired, access_token: JWT_token, user: sendUser },
  });
};

const renderSignIn = catchAsync(async (req, res) => {
  return res.render("users/loginPage");
});

module.exports = { OAuthSignIn, renderSignIn };
