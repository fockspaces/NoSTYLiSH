const axios = require("axios");
const test = require("test");

const endpoint = "http://localhost/api/1.0/products/all";

let hit = 0;
let miss = 0;

// way 1
test1 = async () => {
  for (let i = 0; i < 100; i++) {
    try {
      const res = await axios.get(endpoint);
      hit++;
      console.log(`Request ${i} succeeded with status ${res.status}`);
    } catch (e) {
      miss++;
      console.error(`Request ${i} failed with status ${e.response.status}`);
    }
  }
  console.log(`hit rate : ${hit} / ${hit + miss}`);
};

test2 = async () => {
  test("should allow requests when below the rate limit", async () => {
    // Send 5 requests below the rate limit
    for (let i = 0; i < 5; i++) {
      const res = await axios.get(endpoint);
      expect(res.status).toBe(200);
    }

    // Verify that the rate limit has not been reached
    const res = await axios.get(endpoint);
    expect(res.status).toBe(200);
  });
};

test2();
