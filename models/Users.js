const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    orders:{
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);
