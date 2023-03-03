const redis = require("ioredis");

const client = new redis({
  lazyConnect: true,
  retryStrategy() {
    return null;
  },
});

module.exports = { client };
