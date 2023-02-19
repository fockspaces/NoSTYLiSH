
const profileHandler = async (req, res) => {
  //  sending response
  const { user } = res.locals;
  const { provider, name, email, picture } = user;
  return res.status(200).send({ data: { provider, name, email, picture } });
};

module.exports = {
  profileHandler,
};
