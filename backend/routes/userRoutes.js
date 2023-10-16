import express from "express";
const router = express.Router();
import {
  authorizeUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

// Connect routes with functions/controllers
router.post("/", registerUser); // /api/users integrated
router.post("/authorize", authorizeUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
