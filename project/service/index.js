const express = require("express");
const app = express();
const mogran = require("morgan");
const router = require("./router");
const path = require("path");
const cors = require("cors");
const connectToDB = require("./database/index");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");

const PORT = 3001;

app.use(express.json());
app.use(fileUpload());

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE, PATCH",
  })
);
app.use(mogran("combined"));
app.use(router);
connectToDB();

//connect server img
cloudinary.config({
  cloud_name: "mwg",
  api_key: "975679435312346",
  api_secret: "e_z9cdptDauUXzIJhAi-RgNCLFM",
});

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
