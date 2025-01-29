const mongoose = require("mongoose");

const ExecutionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
    language: { type: String, required: true },
    code: { type: String, required: true },
    output: { type: String, required: true },
    error: { type: String, default: null },
    executionTime: { type: Number, required: true }, // In milliseconds
  },
  { timestamps: true }
);

module.exports = mongoose.model("Execution", ExecutionSchema);
