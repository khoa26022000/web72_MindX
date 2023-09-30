const router = require("express").Router();
const { getUser, createUser } = require("../controllers/user");
const fs = require("fs");

// router.get("/", (req, res) => {
//   const data = fs.readFileSync("data.json");
//   const result = JSON.parse(data);
//   return res.status(200).json({ result });
// });

// Tương tự
router.get("/", getUser);

router.post("/sign-up", createUser);

module.exports = router;
