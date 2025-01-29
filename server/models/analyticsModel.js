const mongoose = require("mongoose");

const AnalyticsSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
    action: {
      type: String,
      enum: ["execution", "save", "collaboration"],
      required: true,
    },
    details: { type: Object },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Analytics", AnalyticsSchema);
