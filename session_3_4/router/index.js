const filmRouter = require("./film");
const userRouter = require("./user");
const router = require("express").Router();

router.use("/film", filmRouter);
router.use("/user", userRouter);

module.exports = router;
