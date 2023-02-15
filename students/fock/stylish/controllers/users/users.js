const handleSignUp = (req, res) => {
  console.log(req.body);
  return res.send(req.body);
};

module.exports = { handleSignUp };
