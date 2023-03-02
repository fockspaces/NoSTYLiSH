const axios = require("axios");
const domain = "localhost";
const endpoint = `http://${domain}/api/1.0/products/all`;

let hit = 0;
let miss = 0;
const delay = 10;
const ipAddresses = [
  "127.0.0.1",
  "192.168.1.1",
  "10.0.0.1",
  "172.16.0.1",
  "192.168.0.1",
];

const endpoints = [
  `http://${domain}/api/1.0/products/all`,
  `http://${domain}/api/1.0/marketing/campaigns`,
  `http://${domain}/api/1.0/user/profile`,
];

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiIxMjMzMjEzQHF3ZW0uY29tIiwicm9sZV9pZCI6MiwiaWF0IjoxNjc3NzUwNjg0LCJleHAiOjE2Nzc4MzcwODR9._mAOZKKYJWakIPCr7jRW9HrF9OCdaJqPngXQ6HPxlvk";

const messages = [];

const test = async () => {
  console.time("Total time");
  for (let i = 0; i < 10; i++) {
    try {
      const res = await axios.get(endpoint);
      hit++;
      console.log(`Request ${i} succeeded`);
    } catch (e) {
      miss++;
      console.error(e.message);
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  console.log(`hit rate : ${hit} / ${hit + miss}`);
  console.timeEnd("Total time");
};

const test2 = async () => {
  const results = await Promise.all(
    ipAddresses.map(async (ip, idx) => {
      for (let i = 0; i < 50; i++) {
        try {
          const res = await axios.get(endpoint, {
            headers: { "X-Forwarded-For": ip },
          });
          hit++;
          console.log(`[${idx}] Request ${i} succeeded`);
        } catch (e) {
          miss++;
          console.error(`[${idx}] Request ${i} failed`);
        }
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      messages.push(`[${idx}] hit rate : ${hit} / ${hit + miss}`);
      return { ip, hit, miss };
    })
  );

  messages.forEach((message) => console.log(message));
  const totalHits = results.reduce((acc, { hit }) => acc + hit, 0);
  const totalMisses = results.reduce((acc, { miss }) => acc + miss, 0);

  console.log(`Total hit rate : ${totalHits} / ${totalHits + totalMisses}`);
};

const test3 = async () => {
  const hitCount = new Map();
  const missCount = new Map();

  // Send 100 requests from different IP addresses to each endpoint
  for (const endpoint of endpoints) {
    const ip = `192.168.1.${Math.floor(Math.random() * 255)}`;

    for (let i = 0; i < 100; i++) {
      try {
        const res = await axios.get(endpoint, {
          headers: { "X-Forwarded-For": ip, Authorization: token },
        });

        if (!hitCount.has(endpoint)) hitCount.set(endpoint, 0);
        hitCount.set(endpoint, hitCount.get(endpoint) + 1);

        console.log(` ${endpoint.slice(-12, -1)} request ${i} succeeded`);
      } catch (e) {
        if (!missCount.has(endpoint)) missCount.set(endpoint, 0);
        missCount.set(endpoint, missCount.get(endpoint) + 1);

        console.log(` ${endpoint.slice(-12, -1)} request ${i} failed`);
      }

      // Add a random delay between requests to simulate concurrent requests
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 100));
    }
  }

  // Print the hit and miss count for each endpoint
  for (const [endpoint, hit] of hitCount.entries()) {
    const miss = missCount.get(endpoint) || 0;
    console.log(` ${endpoint.slice(-12, -1)} hit rate: ${hit} / ${hit + miss}`);
  }
};

test();
// test2();
// test3();
