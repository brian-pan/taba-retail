import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

// Connect routes with functions/controllers
router.route("/").post(protect, addOrderItems);

export default router;
