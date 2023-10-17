import asyncHandler from "express-async-handler"; // allows use async await
import generateToken from "../utilities/generateToken.js";
import User from "../models/userModel.js";

// @description  Authorize user/set token
// @route        POST /api/users/authorize
// @access       Public
const authorizeUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

// @description  Register a new user
// @route        POST /api/users
// @access       Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data entered");
  }
});

// @description  Logout user
// @route        POST /api/users/logout
// @access       Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

// @description  Get user profile
// @route        GET /api/users/profile
// @access       Private (valid JWT required)
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

// @description  Update user profile
// @route        PUT /api/users/profile
// @access       Private (valid JWT required)
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authorizeUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
