const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    codeSnippet: { type: String, required: true },
    suggestion: { type: String, required: true },
    accepted: { type: Boolean, required: true }, // True if user accepted the suggestion
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", FeedbackSchema);
