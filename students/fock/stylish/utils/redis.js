const redis = require("ioredis");

const client = new redis({
  lazyConnect: true,
  retryStrategy() {
    return null;
  },
  username: process.env.REDIS_NAME,
  password: process.env.REDIS_PASSWORD,
});

module.exports = { client };
