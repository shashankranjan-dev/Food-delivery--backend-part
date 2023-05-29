const mongoose = require("mongoose");

const recommendedSchema = new mongoose.Schema({
  itemName: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Recommended", recommendedSchema);
