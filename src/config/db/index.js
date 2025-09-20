const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connect successfully!!!");
  } catch (error) {
    console.error("Connect failed!!!");
  }
}
module.exports = { connect };
