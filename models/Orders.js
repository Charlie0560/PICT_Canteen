const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    username: {
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
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "-"
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Orders", OrderSchema);
