const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  categoryName: {
    type: String,
  },

  description: {
    type: String,
  },

  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Categories", categoriesSchema);
