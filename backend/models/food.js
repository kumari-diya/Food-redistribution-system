const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  title: String,
  quantity: Number,
  donor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  claimedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Food", foodSchema);