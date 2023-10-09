const express = require("express");
const app = express();
const mogran = require("morgan");
const router = require("./router");
const path = require("path");
const { connectToDB } = require("./database/index");

const PORT = 3000;

app.use(express.json());
app.use(mogran("combined"));
app.use(router);
connectToDB();

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
