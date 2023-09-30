const express = require("express");
const app = express();
const mogran = require("morgan");
// const user = require("./router/user");
const router = require("./router");
const path = require("path");
const PORT = 3000;

app.use(express.json());
app.use(mogran("combined"));
app.use(router);
// app.use("/user", user);
// app.use(express.static(path.join(__dirname, "data")));

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
