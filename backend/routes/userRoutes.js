import express from "express";
const router = express.Router();
import {
  authorizeUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// Connect routes with functions/controllers
router.post("/", registerUser); // /api/users integrated
router.post("/authorize", authorizeUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
