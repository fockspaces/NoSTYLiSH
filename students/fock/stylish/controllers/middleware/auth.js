const { verifyToken } = require("../../utils/jwt");
const { searchUserById } = require("../../models/User/UserNative");

const authToken = async (req, res, next) => {
  // get authorization token in headers
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  // verify and decode JWT token and extract id and email
  const decodedToken = verifyToken(token);
  if (!decodedToken)
    return res.status(403).send({ err: "invalid token provided" });

  const { id, email } = decodedToken;

  // check whether user exists
  const user = await searchUserById(id);
  if (!user || email !== user.email)
    return res.status(403).send({ err: "wrong token provided, please check" });

  // pass user info to next function
  console.log(user);
  res.locals.user = user;

  // go to next handler
  return next();
};

module.exports = { authToken };
