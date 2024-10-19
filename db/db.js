const mongoose = require("mongoose");

async function connectToDB() {
  try {
    const mongoUrl = process.env.MONGO_URL;
    const conn = await mongoose.connect(mongoUrl);
    console.log(`Connected to the Database`);
  } catch (error) {
    console.log("Error occurred while connecting to the database: ", error);
  }
}

module.exports = { connectToDB };
