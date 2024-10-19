const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 26 },
  email: { type: String, required: true },
  password: { type: String, required: true },
  reviewdBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Books" }],
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
