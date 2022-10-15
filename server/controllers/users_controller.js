const UserModel = require("../models/user_model");

exports.getAllUsers = async (req, res) => {
  console.log("Reched here");

  UserModel.find({}, (err, users) => {
    if (err) {
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
    return res.status(200).json({
      success: true,
      users,
    });
  });
};

exports.createUsers = async (req, res) => {
  const { name, position, officeNo, mobileNo, smsNo, email } = req.body;
  const newUser = UserModel({
    name,
    position,
    officeNo,
    mobileNo,
    smsNo,
    email,
  });
  await newUser.save();
  return res.status(200).json({
    success: true,
    user: newUser,
  });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      success: false,
      errors: ["Internal server error"],
    });
  }
  await UserModel.deleteOne({ _id: id });
  return res.status(200).json({
    success: true,
    smg: "Deleted user!",
  });
};
