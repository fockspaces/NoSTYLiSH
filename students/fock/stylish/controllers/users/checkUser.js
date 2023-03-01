const { client } = require("../../utils/redis");
const { searchUserById } = require("../../models/User/UserNative");

const checkUser = async (id) => {
  const key = `user_${id}`;
  try {
    // check Redis cache for user data
    await client.connect();
    const cachedData = await client.get(key);
    await client.disconnect();

    // if cache hit
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
    console.log(e);
    return null;
  }
};

module.exports = { checkUser };
