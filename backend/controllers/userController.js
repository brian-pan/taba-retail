// @description  Authorize user/set token
// @route        POST /api/users/authorize
// @access       Public
const authorizeUser = async (req, res) => {
  res.status(200).json({ message: "Authorize User" });
};

export { authorizeUser };
