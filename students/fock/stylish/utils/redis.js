const redis = require("ioredis");
require("dotenv").config();

const tls = process.env.DOMAIN_NAME === "localhost" ? undefined : {};

const client = new redis({
  lazyConnect: true,
  retryStrategy() {
    return null;
  },
  username: process.env.REDIS_NAME,
  password: process.env.REDIS_PASSWORD,
  tls,
});

module.exports = { client };
