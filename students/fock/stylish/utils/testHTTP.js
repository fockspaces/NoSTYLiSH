const axios = require("axios");

const endpoint = "http://localhost/api/1.0/products/all";

let hit = 0;
let miss = 0;

// way 1
test = async () => {
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


test();
