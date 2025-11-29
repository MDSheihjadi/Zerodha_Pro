// const {UserModel} = require("../model/UserModel");
// const { createSecretToken } = require("../util/SecretToken");
// const bcrypt = require("bcryptjs");

// module.exports.Signup = async (req, res, next) => {
//   try {
//     const { email, password, username, createdAt } = req.body;
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.json({ message: "User already exists" });
//     }
//     const user = await User.create({ email, password, username, createdAt });
//     const token = createSecretToken(user._id);
//     res.cookie("token", token, {
//       withCredentials: true,
//       httpOnly: false,
//     });
//     res
//       .status(201)
//       .json({ message: "User signed in successfully", success: true, user });
//     next();
//   } catch (error) {
//     console.error(error);
//   }
// };
//-----------------------------------------------


// BACKEND/Controllers/AuthController.js

const  UserModel = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// ===================== SIGNUP CONTROLLER =====================

const Signup = async (req, res, next) => {
  try {
    // make sure req.body is never undefined
    const { email, password, username, createdAt } = req.body || {};

    // basic validation
    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ success: false, message: "email, username, password required" });
    }

    // check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    // create user (password is hashed in UserModel pre('save'))
    const user = await UserModel.create({
      email,
      username,
      password,
      createdAt,
    });

    // generate token
    const token = createSecretToken(user._id);

    // set cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res
      .status(201)
      .json({ success: true, message: "User signed in successfully", user });
  } catch (err) {
    console.error("Signup error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// ===================== LOGIN CONTROLLER =====================

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "email and password required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res
      .status(201)
      .json({ success: true, message: "User logged in successfully" });
  } catch (err) {
    console.error("Login error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = { Signup, Login };