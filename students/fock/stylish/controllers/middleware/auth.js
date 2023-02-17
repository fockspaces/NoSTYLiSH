const { verifyToken } = require("../../utils/jwt");
const { searchUserByEmail } = require("../../models/User/UserNative");
const catchAsync = require("../../utils/catchAsync");

const authToken = catchAsync(async (req, res, next) => {
  // get authorization token in headers
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(403).send({ err: "plese provide a token" });

  // verify and decode JWT token and extract id and email
  const decodedToken = verifyToken(token);
  if (!decodedToken)
    return res.status(403).send({ err: "invalid token provided" });

  const { id, email } = decodedToken;

  // check whether user exists
  const user = await searchUserByEmail(email);
  if (!user || id !== user.id)
    return res.status(403).send({ err: "wrong token provided, please check" });

  // pass user info to next function
  console.log(user);
  res.locals.user = user;

  // go to next handler
  return next();
});

module.exports = { authToken };
