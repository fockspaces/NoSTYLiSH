const pool = require("../../utils/pool");
const {
  searchUserByEmail,
  createUser,
  searchUserById,
} = require("./UserNative");

module.exports = {
  searchUserByEmail,
  createUser,
  searchUserById,
};
