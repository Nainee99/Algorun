import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB Connected...");

    // Handle connection events
    mongoose.connection.on("disconnected", () => {
      console.error("⚠️ MongoDB Disconnected! Retrying...");
      connectDB(); // Attempt reconnect
    });

    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("🔴 MongoDB Connection Closed.");
      process.exit(0);
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
