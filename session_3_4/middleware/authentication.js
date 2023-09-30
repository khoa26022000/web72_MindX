const jwt = require("jsonwebtoken");
const authentication = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  console.log("====================================");
  console.log(bearerToken);
  console.log("====================================");
  const token = bearerToken.split(" ")[1];
  try {
    const verifyToken = jwt.verify(token, "abc123");
    if (!verifyToken) {
      return res
        .status(401)
        .json({ messsage: "Token đã hết hạn. Bạn vui lòng đăng nhập lại" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ messsage: error });
  }
};

module.exports = authentication;
