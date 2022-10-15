const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  position: String,
  officeNo: String,
  mobileNo: String,
  smsNo: String,
  email: String,
  imageUrl: String,
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
