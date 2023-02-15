const pool = require("../../utils/pool");

const searchUser = (email) => {
  const search = `select * from user`;
};

const createUser = (user) => {
    const create = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
    

}
