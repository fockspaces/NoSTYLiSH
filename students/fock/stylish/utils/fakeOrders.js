const { faker } = require("@faker-js/faker");

const mysql = require("mysql2/promise");

require("dotenv").config({ path: "../.env" });

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

async function createOrders() {
  for (let i = 0; i < 1000; i++) {
    const shipping = faker.address.streetAddress();
    const subtotal = faker.datatype.number({ min: 10, max: 500 });
    const freight = faker.datatype.number({ min: 5, max: 50 });
    const total = subtotal + freight;
    const recipientId = faker.datatype.number({ min: 1, max: 5 });
    const payment = faker.finance.transactionType();
    const status = faker.helpers.arrayElement(["unpaid", "paid"]);
    const text =
      "INSERT INTO orders (shipping, subtotal, freight, total, recipient_id, payment, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
    values = [shipping, subtotal, freight, total, recipientId, payment, status];

    await pool.query(text, values);
  }
}

createOrders()
  .then(() => {
    console.log("Orders created successfully");
  })
  .catch((error) => {
    console.error(error);
  });
