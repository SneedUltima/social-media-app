const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (
  firstName,
  lastName,
  email,
  password,
  about
) {
  if (!firstName || !lastName || !email || !password) {
    throw Error("Please fill in all fields");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not valid or strong");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    firstName,
    lastName,
    about,
    email,
    password: hash,
  });
  console.log("it is done");
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Please fill in all fields");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Entered incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
