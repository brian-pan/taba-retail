import asyncHandler from "express-async-handler"; // allows use async await

// @description  Authorize user/set token
// @route        POST /api/users/authorize
// @access       Public
const authorizeUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Authorize User" });
});

// @description  Register a new user
// @route        POST /api/users
// @access       Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

// @description  Logout user
// @route        POST /api/users/logout
// @access       Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
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
