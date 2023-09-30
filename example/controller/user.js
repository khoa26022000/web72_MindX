const fs = require("fs");
const readFile = require("../utils/readFile");
const jwt = require("jsonwebtoken");
const { uuid } = require("uuidv4");

const signUp = (req, res) => {
  const id = uuid();
  const userName = req.body.userName;
  const passWord = req.body.passWord;

  const result = readFile("user.json");

  const newResult = [...result, { id, userName, passWord }];
  const writeToFile = fs.writeFileSync("user.json", JSON.stringify(newResult));

  return res.status(200).json({ message: "Creater user success", userName });
};

const signIn = (req, res) => {
  const userName = req.body.userName;
  const passWord = req.body.passWord;

  const result = readFile("user.json");

  const checkUser = result.find(
    (user) => user.userName == userName && user.passWord == passWord
  );
  if (checkUser) {
    const token = jwt.sign({ id: checkUser.id }, "abc123", { expiresIn: "1h" });
    return res.status(200).json({ message: "Login success", token });
  }
  res.status(401).json({ message: "Không đúng userName hoặc password" });
};

module.exports = {
  signUp,
  signIn,
};
