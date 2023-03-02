const axios = require("axios");
const domain = "52.194.142.24";
const endpoint = `http://${domain}/api/1.0/products/all`;

let hit = 0;
let miss = 0;
const delay = 0;
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
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiIxMjMzMjEzQHF3ZW0uY29tIiwicm9sZV9pZCI6MiwiaWF0IjoxNjc3NzUzNTU5LCJleHAiOjE2Nzc4Mzk5NTl9.i64y-6fIe8noUxx01TRoXasARN90O3e2hXxmSXWSb68";

const messages = [];

const test = async () => {
  console.time("Total time");
  for (let i = 0; i < 100; i++) {
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
  console.time("Total time");

  const results = await Promise.all(
    ipAddresses.map(async (ip, idx) => {
      for (let i = 0; i < 100; i++) {
        try {
          const res = await axios.get(endpoint, {
            headers: { "X-Forwarded-For": ip },
          });
          hit++;
          // console.log(`[${idx}] Request ${i} succeeded`);
        } catch (e) {
          miss++;
          // console.error(`[${idx}] Request ${i} failed`);
        }
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      messages.push(`[${idx}] hit rate : ${hit} / ${hit + miss}`);
      return { ip, hit, miss };
    })
  );

  console.timeEnd("Total time");
  messages.forEach((message) => console.log(message));
  const totalHits = results.reduce((acc, { hit }) => acc + hit, 0);
  const totalMisses = results.reduce((acc, { miss }) => acc + miss, 0);

  console.log(`Total hit rate : ${totalHits} / ${totalHits + totalMisses}`);
};

const test3 = async () => {
  console.time("Total time");

  const hitCount = new Map();
  const missCount = new Map();

  // Send 100 requests from different IP addresses to each endpoint
  for (const endpoint of endpoints) {
    const ipCount = new Map();

    for (const ipAddress of ipAddresses) {
      ipCount.set(ipAddress, { hit: 0, miss: 0 });
    }

    for (let i = 0; i < 1000; i++) {
      const ip = ipAddresses[Math.floor(Math.random() * ipAddresses.length)];
      const request = axios
        .get(endpoint, {
          headers: { "X-Forwarded-For": ip, Authorization: token },
        })
        .then((res) => {
          const endpointData = hitCount.get(endpoint) || new Map();
          hitCount.set(endpoint, endpointData);

          const ipData = endpointData.get(ip) || { hit: 0, miss: 0 };
          ipData.hit++;
          endpointData.set(ip, ipData);
        })
        .catch((e) => {
          const endpointData = missCount.get(endpoint) || new Map();
          missCount.set(endpoint, endpointData);

          const ipData = endpointData.get(ip) || { hit: 0, miss: 0 };
          ipData.miss++;
          endpointData.set(ip, ipData);
        });

      // Add a random delay between requests to simulate concurrent requests
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 100));
    }
  }

  console.timeEnd("Total time");

  // Print the hit and miss count for each endpoint and IP address
  for (const [endpoint, endpointData] of hitCount.entries()) {
    console.log(`Endpoint: ${endpoint}`);
    for (const [ip, { hit, miss }] of endpointData.entries()) {
      console.log(`  IP: ${ip}, hit rate: ${hit} / ${hit + miss}`);
    }
  }
};

// test();
// test2();
test3();
