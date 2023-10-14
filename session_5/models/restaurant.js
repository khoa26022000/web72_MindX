const mongoose = require("mongoose");

const Restaurant = mongoose.Schema({
  address: {
    building: {
      type: String,
    },
    coord: [
      {
        type: Number,
      },
    ],
    street: {
      type: String,
    },
    zipcode: {
      type: String,
    },
  },
  borough: {
    type: String,
  },
  cuisine: [
    {
      date: {
        type: Number,
      },
      grade: {
        type: String,
      },
      score: {
        type: String,
      },
    },
  ],
  name: {
    type: String,
    required: true,
  },
  restaurant_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("restaurant", Restaurant);
