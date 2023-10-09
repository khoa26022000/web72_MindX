const { databaseFunction } = require("../database");
class restaurantController {
  async getAllRestaurant(req, res) {
    try {
      const result = await databaseFunction().find().toArray();
      console.log("====================================");
      console.log(result);
      console.log("====================================");
      return res
        .status(200)
        .json({ message: "getAllRestaurant success", data: result });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async getRestaurantZipCode(req, res) {
    try {
      const result = await databaseFunction()
        .find({ "address.zipcode": "11209" })
        .toArray();
      return res
        .status(200)
        .json({ message: "getRestaurantZipCode success", data: result });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = new restaurantController();
