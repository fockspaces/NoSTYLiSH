const axios = require("axios");

const endpoint = "http://52.194.142.24/api/1.0/products/all";

let hit = 0;
let miss = 0;
const delay = 0;

const test = async () => {
  console.time("Total time");
  for (let i = 0; i < 100; i++) {
    try {
      const res = await axios.get(endpoint);
      hit++;
      console.log(`Request ${i} succeeded with status ${res.status}`);
    } catch (e) {
      miss++;
      console.error(e.message);
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  console.log(`hit rate : ${hit} / ${hit + miss}`);
  console.timeEnd("Total time");
};

test();
