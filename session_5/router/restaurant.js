const router = require("express").Router();
const restaurantController = require("../controllers/restaurant");

router.get("/getAllRestaurant", restaurantController.getAllRestaurant);
router.get("/getZipcode", restaurantController.getRestaurantZipCode);

module.exports = router;
