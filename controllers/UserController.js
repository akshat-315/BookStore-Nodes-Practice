const Users = require("../models/Users.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CustomError = require("../utils/errorClass.js");

//Sign-Up function
const userSignUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingEmail = Users.find({ email });
    if (!existingEmail) {
      throw new CustomError("User with the given email already exists", 409);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await Users.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    });
  } catch (error) {
    next(error);
  }
};

//Log-In function
const userLogIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Users.findOne({ email });
    if (!existingUser) {
      throw new CustomError("Incorrect email", 400);
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      throw new CustomError("Incorrect Password", 400);
    }
    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
      },
      process.env.SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      success: true,
      token: token,
      message: "Login Sucessfully!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { userSignUp, userLogIn };
