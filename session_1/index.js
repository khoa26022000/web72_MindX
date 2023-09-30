const express = require("express");
const app = express();
const mogran = require("morgan");
var bodyParser = require("body-parser");

app.use(mogran("combined"));

var jsonParser = bodyParser.json();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Home" });
});

app.post("/login", jsonParser, (req, res) => {
  console.log("====================================");
  console.log("req", req.body.user);
  console.log("====================================");
  return res.status(200).json({ message: req.body.user });
});

app.listen(3000, () => {
  console.log(`app is listening on http://localhost:${3000}`);
});
