const { client } = require("../../utils/redis");
const { searchUserById } = require("../../models/User/UserNative");

const checkUser = async (id) => {
  const key = `user_${id}`;
  try {
    // check Redis cache for user data
    connection = true;
    await client.connect();
    const cachedData = await client.get(key);
    await client.disconnect();
    // if cache hit
    console.log('hit the user data');
    if (cachedData) {
      const user = JSON.parse(cachedData);
      return user;
    }
    // cache miss, fetch user data from database
    const user = await searchUserById(id);
    if (user) {
      // cache user data for future use
      await client.connect();
      await client.set(key, JSON.stringify(user));
      await client.disconnect();
    }
    return user;
  } catch (e) {
    console.log(e.message);
    // fail in cache
    if (e.port === 6379) {
      await client.disconnect();
      console.log("disconnect redis");
      const user = await searchUserById(id);
      return user;
    }
    return null;
  }
};

module.exports = { checkUser };
