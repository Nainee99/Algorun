import express from "express";
import { signupSchema, loginSchema } from "../validators/authSchemas.js";
import {
  signup,
  signin,
  logout,
  checkAuth,
  getUser,
} from "../controllers/authController.js";
import validateRequest from "../middlewares/validateMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// User Signup
router.post("/signup", validateRequest(signupSchema), signup);

// User Signin
router.post("/signin", validateRequest(loginSchema), signin);

// Logout (Protected)
router.post("/logout", authMiddleware, logout);

// Check if user is authenticated (Protected)
router.get("/checkauth", authMiddleware, checkAuth);

// Get user details (Only logged-in user can access their own profile)
router.get("/user/:id", authMiddleware, getUser);

export default router;
