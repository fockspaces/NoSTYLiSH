require("dotenv").config();
const port = process.env.PORT;
const domain_name = process.env.DOMAIN_NAME;
const { renderHomePage } = require("./controllers/products/products");

const express = require("express");

const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.get("/", renderHomePage);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const product = require("./routes/product");
const admin = require("./routes/admin");
const user = require("./routes/user");
const marketing = require("./routes/marketing");

const {
  errorHandler,
  notFoundHandler,
} = require("./controllers/middleware/error");

app.use("/admin", admin);
app.use("/api/1.0/products", product);
app.use("/api/1.0/user", user);
app.use("/api/1.0/marketing", marketing);

app.use(express.static("public"));
app.use("/images/", express.static("./uploads/"));

// error handling
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
  console.log(
    `you can access the server with the link: http://${domain_name}/`
  );
  console.log(`kill this process with:$ kill ${process.pid}`);
});
