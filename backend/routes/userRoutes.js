const express = require("express");
const router = express.Router();
const {
  loginUser,
  signupUser,
  getUser,
  getUsers,
} = require("../controllers/userController");

router.post("/login", loginUser);

router.post("/signup", signupUser);

router.get("/getusers", getUsers);

router.get("/:id", getUser);

module.exports = router;
