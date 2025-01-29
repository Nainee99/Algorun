import User from "../models/userModel.js"
import cloudinary from "../config/cloudinary.js";
import { ErrorResponse, sendErrorResponse } from "../utils/errorResponse.js";
import { sendSuccessResponse } from "../utils/successResponse.js";

// @desc    Upload Profile Picture
// @route   POST /api/user/upload-profile-picture
// @access  Private
export const uploadProfilePicture = async (req, res) => {
  try {
    if (!req.file) {
      throw new ErrorResponse("No file uploaded", 400);
    }

    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "profile_pictures",
      transformation: [{ width: 500, height: 500, crop: "limit" }],
    });

    // Update user's profile picture
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { profilePicture: result.secure_url },
      { new: true }
    );

    if (!user) {
      throw new ErrorResponse("User not found", 404);
    }

    return sendSuccessResponse(
      res,
      { profilePicture: result.secure_url },
      "Profile picture updated successfully"
    );
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// @desc    Update User Profile
// @route   PUT /api/user/update-profile
// @access  Private
export const updateUserProfile = async (req, res) => {
  try {
    const { firstName, lastName, username } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { firstName, lastName, username },
      { new: true }
    );

    if (!updatedUser) {
      throw new ErrorResponse("User not found", 404);
    }

    return sendSuccessResponse(
      res,
      updatedUser,
      "Profile updated successfully"
    );
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
