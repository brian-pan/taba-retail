import express from "express";
const router = express.Router();
import { authorizeUser } from "../controllers/userController.js";

router.post("/authorize", authorizeUser); // /api/users connects to the Routes file

export default router;
