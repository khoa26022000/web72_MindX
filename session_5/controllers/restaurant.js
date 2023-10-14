const { databaseFunction } = require("../database");
const Restaurant = require("../models/restaurant");
class restaurantController {
  async createRestaurant(req, res) {
    try {
      const newRestaurant = await Restaurant.create(req.body);
      return res
        .status(200)
        .json({ message: "createRestaurant success", data: newRestaurant });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async pagination(req, res) {
    try {
      const pageSize = req.query.pageSize || 3;
      const pageIndex = req.query.pageIndex || 1;
      const result = await Restaurant.find()
        .skip(pageSize * pageIndex - pageSize)
        .limit(pageSize);
      return res
        .status(200)
        .json({ message: "createRestaurant success", data: result });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async getAllRestaurant(req, res) {
    try {
      const result = await Restaurant.find().toArray();
      return res
        .status(200)
        .json({ message: "getAllRestaurant success", data: result });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async getRestaurantZipCode(req, res) {
    try {
      const result = await Restaurant.find({
        "address.zipcode": "11209",
      }).toArray();
      return res
        .status(200)
        .json({ message: "getRestaurantZipCode success", data: result });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = new restaurantController();
