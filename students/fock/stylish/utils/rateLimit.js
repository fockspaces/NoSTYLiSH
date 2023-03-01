// fixed window
const rateLimit1 = (maxReq, timeWindow) => {
  let hit = 0;
  let miss = 0;

  const requests = {};

  const reset = (ip) => {
    requests[ip].count = 0;
    requests[ip].lastReq = Date.now();
  };

  const init = (ip) => {
    requests[ip] = { count: 0 };
  };

  return (req, res, next) => {
    console.log(`${hit}/${hit + miss}`);
    const ip = req.ip;
    if (!requests[ip]) init(ip);

    // if last time request longer than the time window, update it
    if (Date.now() - requests[ip].lastReq > timeWindow * 1000) reset(ip);

    // check requset amount limit
    if (requests[ip].count >= maxReq) {
      reset(ip);
      miss++;
      return res.status(429).send("too many requests, please try again later");
    }

    requests[ip].count++;
    hit++;
    next();
  };
};

// bucket token
const rateLimit2 = (capacity, limitTime) => {
  let hit = 0;
  let miss = 0;

  let tokens = capacity;
  let lastReq = new Date();

  return (req, res, next) => {
    console.log(`${hit}/${hit + miss}`);
    const curReq = new Date();
    const seconds = (curReq - lastReq) / 1000;
    const limit = seconds * limitTime;
    tokens = Math.min(capacity, tokens + limit);

    if (tokens >= 1) {
      tokens -= 1;
      lastReq = curReq;
      hit++;
      return next();
    }
    miss++;
    return res.status(429).send("Too Many Requests");
  };
};

const limiter = rateLimit1(10, 1);

module.exports = { limiter };
