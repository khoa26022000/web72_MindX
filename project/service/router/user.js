const router = require("express").Router();
const { createUser, login } = require("../controllers/user");

router.post("/login", login);
router.post("/", createUser);

module.exports = router;
