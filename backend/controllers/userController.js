const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" });
};

// creating web tokens on login or signup
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);

    const firstName = user.firstName;
    const lastName = user.lastName;
    const id = user._id;

    res.status(200).json({ firstName, lastName, email, token, id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { firstName, lastName, email, password, about } = req.body;
  console.log("k2");
  try {
    const user = await User.signup(firstName, lastName, email, password, about);
    console.log("k3");
    const token = createToken(user._id);
    console.log("k5");
    res.status(200).json({ email, token });
    console.log("k6");
  } catch (error) {
    console.log("k4");
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json(user);
};

module.exports = {
  loginUser,
  signupUser,
  getUser,
};
