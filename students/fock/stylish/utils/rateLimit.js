const { client } = require("./redis");

// fixed window
const rateLimit1 = (maxReq, timeWindow) => {
  return async (req, res, next) => {
    try {
      const ip = req.ip;
      // fetch data from cache
      const count = await client.get(ip);
      // initialize count if it doesn't exist
      const reqCount = count ? parseInt(count) : 0;
      // if last time request longer than the time window, update it
      if (
        reqCount > 0 &&
        Date.now() - parseInt(await client.ttl(ip)) * 1000 > timeWindow * 1000
      ) {
        await client.del(ip);
      }
      // check request amount limit
      if (reqCount >= maxReq) {
        return res
          .status(429)
          .send("too many requests, please try again later");
      }
      // increase count and set cache (set exipired 1s)
      await client.set(ip, reqCount + 1, "EX", timeWindow);
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
        await client.set("lastReq", JSON.stringify(lastReq));
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

const rateLimit3 = (limit, interval) => {
  return async (req, res, next) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const key = `rate-limiter:${ip}`;

    try {
      // Acquire lock
      const lock = await client.acquire(key, { timeout: 1000 });
      if (!lock) {
        return res.status(429).send("Too Many Requests");
      }

      // Get current count and reset time
      const [count, resetTime] = await Promise.all([
        client.get(key),
        client.pttl(`${key}:reset`),
      ]);

      const now = Date.now();

      // If count is null, set it to zero
      let currentCount = count ? parseInt(count, 10) : 0;

      // If reset time is in the future, wait until then
      if (resetTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, resetTime));
      }

      // Increment count and set reset time if count is zero
      currentCount++;
      if (currentCount === 1) {
        await Promise.all([
          client.set(key, currentCount, "EX", interval),
          client.psetex(`${key}:reset`, interval, now + interval),
        ]);
      } else {
        await client.set(key, currentCount);
      }

      // Release lock and call next middleware
      await client.release(lock);
      next();
    } catch (err) {
      console.error(err);
      return next();
    }
  };
};

const limiter = rateLimit1(10, 1);
// const limiter = rateLimit2(10, 1);
// const limiter = rateLimit3(10, 1000);

module.exports = { limiter };
