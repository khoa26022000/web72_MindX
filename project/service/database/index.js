const mongoose = require("mongoose");

const url =
  "mongodb+srv://khoa26022000:gygjiLUwudAqGc2d@web72.bvyy175.mongodb.net/my-block";

async function connectToDB() {
  try {
    await mongoose.connect(url);
    console.log("Connected successfully to server");
  } catch (error) {
    console.log("Connected error:", error);
  }
}

module.exports = connectToDB;
