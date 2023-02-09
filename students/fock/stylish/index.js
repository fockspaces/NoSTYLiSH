const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
  console.log(`you can access the server with the link: http://54.148.100.118`);
  console.log(`kill this process with: $kill ${process.pid}`);
});
