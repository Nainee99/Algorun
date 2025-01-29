import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true, select: false }, // Don't expose password by default
    profilePicture: { type: String, default: "" },
    savedSnippets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Snippet" }],
    editorSettings: { type: Object, default: {} }, // User preferences
  },
  { timestamps: true } // Auto-adds `createdAt` and `updatedAt`
);

export default mongoose.model("User", UserSchema);
