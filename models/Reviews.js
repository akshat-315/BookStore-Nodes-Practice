const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Books", required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now() },
});

const Reviews = mongoose.model("Reviews", reviewSchema);

module.exports = Reviews;
