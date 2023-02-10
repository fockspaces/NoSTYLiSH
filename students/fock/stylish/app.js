require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
  console.log(
    `you can access the server with the link: http://35.89.81.174:8000/`
  );
  console.log(`kill this process with:$ kill ${process.pid}`);
});
