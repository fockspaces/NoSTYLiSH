const { client } = require("../../utils/redis");

const checkCampaignCache = async (req, res, next) => {
  const key = "campaigns";
  try {
    // use redis cache
    await client.connect();
    const cacheData = await client.get(key);

    // if cachData exists
    if (cacheData) {
      const cachedata = JSON.parse(cacheData);
      // filter the expired data
      const validData = cachedata.filter(
        (data) =>
          new Date() < new Date(data.end_date) &&
          new Date() > new Date(data.start_date)
      );
      console.log(validData);
      // update data from cache
      if (validData.length != cachedata.length) {
        await client.set("campaigns", JSON.stringify(validData));
      }

      console.log("hit: ", cachedata);
      await client.disconnect();
      return res.status(200).send({ data: cachedata });
    }

    next();
  } catch (e) {
    await client.disconnect();
    console.log(e);
  }
};

module.exports = { checkCampaignCache };
