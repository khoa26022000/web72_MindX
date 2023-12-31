const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/my-blog";

async function connectToDB() {
  try {
    await mongoose.connect(url);
    console.log("Connected successfully to server");
  } catch (error) {
    console.log("Connected error:", error);
  }
}

module.exports = connectToDB;
