const express = require("express");
const {
  getAllUsers,
  createUsers,
  deleteUser,
} = require("../controllers/users_controller");
const {
  validateUserSchema,
  userSchema,
} = require("../validator/user_validator");

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(validateUserSchema(userSchema), createUsers);
router.route("/:id").delete(deleteUser);

exports.usersRoute = router;
