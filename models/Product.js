const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
      {
        userId: {
          type: String,
        },
        foodimg: {
          type: String,
        },
        category: {
          type: String,
        },
        item_name: {
          type: String,
        },
        item_price: {
          type: Number,
        },
        foodavailabletime: {
          type: String,
        },
      }
    ,
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductSchema);
