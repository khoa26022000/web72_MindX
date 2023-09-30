const jwt = require("jsonwebtoken");
const authentication = async (req, res, next) => {
  const tokenBearer = req.headers.authorization;
  const token = tokenBearer.split(" ")[1];
  try {
    const checkToken = jwt.verify(token, "abc123");
    if (checkToken) {
      next();
    }
    return res
      .status(401)
      .json({ message: "Token hết hạn vui lòng đăng nhập lại" });
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};
module.exports = authentication;
