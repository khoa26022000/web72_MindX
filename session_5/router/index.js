const restaurantRouter = require("./restaurant");
const router = require("express").Router();

router.use("/restaurant", restaurantRouter);

module.exports = router;
