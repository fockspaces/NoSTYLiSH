const pool = require("../../utils/pool");
const { searchUserByEmail, createUser } = require("./UserNative");

module.exports = {
  searchUserByEmail,
  createUser,
};
