const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

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

    res.status(200).json({ firstName, lastName, email, token });
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

module.exports = {
  loginUser,
  signupUser,
};
