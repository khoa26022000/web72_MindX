const router = require("express").Router();
const { signIn, signUp } = require("../controller/user");

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);

module.exports = router;
