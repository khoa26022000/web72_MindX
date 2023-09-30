const { readFile } = require("../utils/readFile");
const { uuid } = require("uuidv4");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const signUp = (req, res) => {
  const id = uuid();
  const userName = req.body.userName;
  const passWord = req.body.passWord;
  const result = readFile("user.json");
  const newResult = [...result, { id, userName, passWord }];
  const createrUser = fs.writeFileSync("user.json", JSON.stringify(newResult));
  return res.status(200).json({
    message: "Create user success",
    data: userName,
  });
};

const signIn = (req, res) => {
  const userName = req.body.userName;
  const passWord = req.body.passWord;
  const listUsers = readFile("user.json");

  const checkUser = listUsers.find(
    (user) => user.userName == userName && user.passWord == passWord
  );
  if (!checkUser) {
    return res
      .status(401)
      .json({ message: "Không đúng userName hoặc password" });
  }
  try {
    const token = jwt.sign(
      {
        id: checkUser.id,
      },
      "abc123",
      { expiresIn: "1h" }
    );
    return res.status(200).json({ message: "Sign In success", token });
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Không đúng userName hoặc password" });
  }
};

module.exports = {
  signUp,
  signIn,
};
