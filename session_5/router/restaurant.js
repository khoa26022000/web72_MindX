const router = require("express").Router();
const restaurantController = require("../controllers/restaurant");

router.get("/getAllRestaurant", restaurantController.getAllRestaurant);
router.get("/getZipcode", restaurantController.getRestaurantZipCode);
router.post("/createRestaurant", restaurantController.createRestaurant);
router.get("/pagination", restaurantController.pagination);

module.exports = router;
