const fs = require("fs");
const readFile = (url) => {
  const data = fs.readFileSync(url);
  const result = JSON.parse(data);
  return result;
};

module.exports = readFile;
