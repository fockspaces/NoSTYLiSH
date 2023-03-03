const redis = require("ioredis");

const client = new redis({
  lazyConnect: true,
  retryStrategy() {
    return null;
  },
  password: process.env.REDIS_PASSWORD,
});

module.exports = { client };
