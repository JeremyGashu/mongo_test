const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@testermias.fvee1.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("DB Connected!");
});

module.exports = db;
