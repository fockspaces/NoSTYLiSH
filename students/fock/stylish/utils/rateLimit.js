const { client } = require("./redis");

// fixed window
const rateLimit1 = (maxReq, timeWindow) => {
  let hit = 0;
  let miss = 0;

  return async (req, res, next) => {
    try {
      const ip = req.ip;
      // fetch data from cache
      const count = await client.get(ip);
      // initialize count if it doesn't exist
      const reqCount = count ? parseInt(count) : 0;
      console.log(`${hit}/${hit + miss}`);
      // if last time request longer than the time window, update it
      if (
        reqCount > 0 &&
        Date.now() - parseInt(await client.ttl(ip)) * 1000 > timeWindow * 1000
      ) {
        await client.del(ip);
      }
      // check request amount limit
      if (reqCount >= maxReq) {
        miss++;
        return res
          .status(429)
          .send("too many requests, please try again later");
      }
      // increase count and set cache (set exipired 1s)
      await client.set(ip, reqCount + 1, "EX", timeWindow);
      hit++;
      next();
    } catch (err) {
      console.error(err);
      return next();
    }
  };
};

// bucket token
const rateLimit2 = (capacity, limitTime) => {
  let hit = 0;
  let miss = 0;
  return async (req, res, next) => {
    try {
      // fetch data in cache
      let tokens = await client.get("tokens");
      let lastReq = await client.get("lastReq");
      tokens = JSON.parse(tokens);
      lastReq = JSON.parse(lastReq);
      // initialize when there's no data in cache
      if (!tokens || !lastReq) {
        tokens = capacity;
        lastReq = new Date();
        await client.set("tokens", JSON.stringify(tokens));
        await client.set("lastReq", JSON.stringify(lastReq));
      }
      console.log(`${hit}/${hit + miss}`);
      const curReq = new Date();
      const seconds = (curReq - new Date(lastReq)) / 1000;
      const limit = seconds * limitTime;
      tokens = Math.min(capacity, tokens + limit);
      if (tokens >= 1) {
        tokens -= 1;
        lastReq = curReq;
        await client.set("tokens", JSON.stringify(tokens));
        await client.sget("lastReq", JSON.stringify(lastReq));
        hit++;
        return next();
      }
      miss++;
      return res.status(429).send("Too Many Requests");
    } catch (err) {
      console.error(err);
      return next();
    }
  };
};

const limiter = rateLimit2(10, 1);

module.exports = { limiter };
