const { client } = require("../../utils/redis");

const checkCampaignCache = async (req, res, next) => {
  const key = "campaigns";
  try {
    // use redis cache
    await client.connect();
    req.redisConnection = true;
    const cacheData = await client.get(key);
    await client.disconnect();


    // if cachData exists
    if (cacheData) {
      const cachedata = JSON.parse(cacheData);
      // filter the expired data
      const validData = cachedata.filter((data) => {
        return (
          new Date() < new Date(data.end_date) &&
          new Date() > new Date(data.start_date)
        );
      });
      // update data from cache
      if (validData.length != cachedata.length) {
        await client.connect();
        await client.set("campaigns", JSON.stringify(validData));
        await client.disconnect();
      }

      console.log("hit: ", cachedata);
      return res.status(200).send({ data: cachedata });
    }

    // cache not found
    next();
  } catch (e) {
    console.log(e.message);
    // cache access failed
    if (!req.redisConnection) await client.disconnect();
    // If Redis is down, just continue to the next middleware
    next();
  }
};

module.exports = { checkCampaignCache };
