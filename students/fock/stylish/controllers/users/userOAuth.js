const OAuthSignIn = async (req, res) => {
  return res.status(200).send("sd");
};

const renderSignIn = async (req, res) => {
  return res.render("users/loginPage");
};

module.exports = { OAuthSignIn, renderSignIn };
