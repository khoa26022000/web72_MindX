// => token => verify_token => token nay dung => se cho nguoi ta di qua (neu token sai => thi minh se chan lai)

const jwt = require("jsonwebtoken");
const userModel = require("../models/users");

const authentication = async (req, res, next) => {
  const bearerToken = req.headers.authorization; // Khi ma dang nhap vao thanh cong -> backend cap cho ben phia client 1 doan ma

  if (!bearerToken) {
    return res.status(401).json({ message: "Ban chua dang nhap 1" });
  }

  const token = bearerToken.split(" ")[1]; // Bearer token
  try {
    const checkToken = jwt.verify(token, "web72");
    const userId = checkToken.userId;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(401).json({ message: "Ban chua dang nhap 2" });
    }
    req.user = user;
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Ban chua dang nhap 3" });
  }
};
module.exports = authentication;
