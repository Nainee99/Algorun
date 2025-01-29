import express from "express";
import {
  uploadProfilePicture,
  updateUserProfile,
} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

// Profile picture upload route
router.post(
  "/upload-profile-picture",
  authMiddleware,
  upload.single("profilePicture"),
  uploadProfilePicture
);

// Update profile route
router.put("/update-profile", authMiddleware, updateUserProfile);

export default router;
