const fs = require("fs");

const getUser = (req, res) => {
  const data = fs.readFileSync("data.json");
  const result = JSON.parse(data);
  return res.status(200).json({ result });
};

const createUser = (req, res) => {
  const userName = req.body.userName;
  const userId = req.body.userId;

  const data = fs.readFileSync("data.json");
  const result = JSON.parse(data);
  const found = result.find((element) => element.userId == userId);
  if (!found) {
    const newResult = [...result, { userId, userName }];
    const writeToFile = fs.writeFileSync(
      "data.json",
      JSON.stringify(newResult)
    );

    return res.status(200).json({
      message: "Create user success",
      data: newResult,
    });
  } else {
    return res.status(400).json({
      message: "Lỗi rồi !!!",
    });
  }
  //   result.forEach(element => {
  //     element.userId
  //   });
};

module.exports = {
  getUser,
  createUser,
};
