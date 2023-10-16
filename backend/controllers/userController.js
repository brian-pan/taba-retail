import asyncHandler from "express-async-handler"; // allows use async await

// @description  Authorize user/set token
// @route        POST /api/users/authorize
// @access       Public
const authorizeUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Authorize User" });
});

export { authorizeUser };
