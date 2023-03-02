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

const rateLimit3 = (capacity, window) => {
  return async (req, res, next) => {
    const ip = req.socket.remoteAddress || req.ip;
    console.log(ip);
    const key = `rateLimit:${ip}`;

    const exists = await client.exists(key);

    // If the key doesn't exist, set it and continue
    if (!exists) {
      await client.setex(key, window, 1);
      return next();
    }

    const [currentCount, lastSuccess] = await Promise.all([
      client.incr(key),
      client.get(`${key}:lastSuccess`),
    ]);

    // If the last successful request was more than `window` seconds ago,
    // reset the count and last success time
    if (lastSuccess && Date.now() - lastSuccess > window * 1000) {
      await Promise.all([
        client.set(key, 1),
        client.set(`${key}:lastSuccess`, Date.now()),
      ]);
      return next();
    }

    // If the current count is greater than the capacity, expire the key and return a 429
    if (currentCount > capacity) {
      await client.expire(key, window);
      return res.status(429).send("Too Many Requests");
    }

    // Otherwise, set the last success time and continue
    await client.set(`${key}:lastSuccess`, Date.now());
    next();
  };
};

// const limiter = rateLimit1(10, 1);
// const limiter = rateLimit2(10, 1);
const limiter = rateLimit3(10, 1);

module.exports = { limiter };
