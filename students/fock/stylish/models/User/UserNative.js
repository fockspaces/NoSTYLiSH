const pool = require("../../utils/pool");
const { hash } = require("../../utils/bcrypt");

const searchUserByEmail = async (email) => {
  const search = `select * from user WHERE email = ?`;
  const values = [email];
  const [result] = await pool.query(search, values);
  return result[0];
};

const createUser = async (user) => {
  const { name, email, password, picture } = user;
  const pictureCheck = picture || "";
  const create =
    "INSERT INTO user (name, email, password, provider, picture) VALUES (?, ?, ?, ?, ?)";

  // hash password
  const hashPassword = await hash(password);

  const values = [name, email, hashPassword, "native", pictureCheck];
  const [result] = await pool.query(create, values);
  return result.insertId;
};

module.exports = {
  searchUserByEmail,
  createUser,
};
