const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "my-blog";
const collectionName = "restaurant";

async function connectToDB() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
  } catch (error) {
    console.log("Connected error:", error);
  }
}

const databaseFunction = () => {
  return client.db(dbName).collection(collectionName);
};

module.exports = { connectToDB, databaseFunction };
