const { verifyToken } = require("../../utils/jwt");
const { checkUser } = require("../users/checkUser");
const roles = require("../../utils/roles");

const authToken = async (req, res, next) => {
  // get authorization token in headers
  const authHeader = req.headers.authorization || req.cookies.access_token;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  // verify and decode JWT token and extract id and email
  const decodedToken = verifyToken(token);
  if (!decodedToken)
    return res.status(403).send({ err: "invalid token provided" });

  const { id, email, role_id } = decodedToken;

  // check whether user exists
  const user = await checkUser(id);
  console.log(user);
  if (!user || email !== user.email)
    return res.status(403).send({ err: "wrong token provided, please check" });

  // pass user info to next function
  res.locals.user = user;
  req.user = { ...user, role_id };

  // go to next handler
  return next();
};

const authorize = (permissions) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role_id) {
      return res.status(401).send("Unauthorized: User role not found");
    }

    const authorized = permissions.some((permission) => {
      return roles[req.user.role_id].includes(permission);
    });

    if (!authorized) {
      return res.status(403).send({
        err: "Forbidden: User not authorized to access this resource",
      });
    }

    next();
  };
};

module.exports = { authToken, authorize };
