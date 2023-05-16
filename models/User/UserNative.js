const pool = require("../../utils/pool");
const { hash } = require("../../utils/bcrypt");

const searchUserByEmail = async (email) => {
  const search = `select * from user WHERE email = ?`;
  const values = [email];
  const [result] = await pool.query(search, values);
  return result[0];
};

const searchUserById = async (id) => {
  const search = `select * from user WHERE id = ?`;
  const values = [id];
  const [result] = await pool.query(search, values);
  return result[0];
};

const createUser = async (user) => {
  const { name, email, password, picture, provider, role_id } = user;
  const pictureCheck = picture || "";
  const passwordCheck = password ? password : `${name}_${email}_${picture}`;
  const providerCheck = provider;
  const roleCheck = role_id || 2;
  const create =
    "INSERT INTO user (name, email, password, provider, picture, role_id) VALUES (?, ?, ?, ? ,? ,?)";

  // hash password
  const hashPassword = await hash(passwordCheck);

  const values = [
    name,
    email,
    hashPassword,
    providerCheck,
    pictureCheck,
    roleCheck,
  ];
  const [result] = await pool.query(create, values);
  return result.insertId;
};

module.exports = {
  searchUserByEmail,
  createUser,
  searchUserById,
};
