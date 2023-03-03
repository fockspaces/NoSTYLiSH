const { client } = require("../../utils/redis");

const checkCampaignCache = async (req, res, next) => {
  const key = "campaigns";
  try {
    // if cache shutdown, try reconnect
    if (client.status !== "ready") {
      console.log("reconnect");
      await client.connect();
    }

    // use redis cache
    const cacheData = await client.get(key);

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
        await client.set("campaigns", JSON.stringify(validData));
      }
      console.log('cache hit');
      return res.status(200).send({ data: cachedata });
    }

    // cache not found
    next();
  } catch (e) {
    console.log(e.message);
    // cache access failed
    if (e.port === 6379) {
      console.log("redis not connected");
    }
    // If Redis is down, just continue to the next middleware
    next();
  }
};

module.exports = { checkCampaignCache };
