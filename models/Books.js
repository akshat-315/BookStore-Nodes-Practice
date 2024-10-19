const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 1, max: 26 },
  category: { type: String, required: true },
  description: { type: String },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reviews" }],
  a,
});
