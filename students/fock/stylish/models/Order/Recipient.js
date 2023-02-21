const pool = require("../../utils/pool");

const GetRecipient = async (id) => {
  const getRecipient = `select * from recipients where id = ?`;
  const values = [id];
  const [result] = await pool.query(getRecipient, values);
  return result[0];
};

const CreateRecipient = async (recipient) => {
  const { name, phone, email, address, time } = recipient;
  const query =
    "INSERT INTO recipients (name, phone, email, address, delivery_time) VALUES (?, ?, ?, ?, ?)";
  const values = [name, phone, email, address, time];
  const [result] = await pool.query(query, values);
  return result.insertId;
};

module.exports = { GetRecipient, CreateRecipient };
