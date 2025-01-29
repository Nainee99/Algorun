import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // CORS middleware
import helmet from "helmet"; // Helmet middleware for security
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config(); // Load environment variables

const app = express();

// Middleware for security and cross-origin requests
// CORS middleware configuration
const corsOptions = {
  origin: "http://localhost:5173", // Allow only localhost:5173 to make requests
  methods: "GET,POST,PUT,DELETE", // Optionally restrict allowed methods
  credentials: true, // Allow cookies to be sent with requests (optional)
};

app.use(cors(corsOptions)); // Apply the CORS middleware with the specified options

app.use(helmet()); // Adds various security headers to requests

// Body parser middleware to handle JSON requests
app.use(express.json()); // Parse incoming JSON requests

// Use routes
app.use("/api/auth", authRoutes); // Mount the auth routes on the "/api/auth" path
app.use("/api/users", userRoutes); // Mount the user routes on the "/api/users"

// Global Error Handling Middleware
app.use(errorHandler); // This should be last to catch any unhandled errors

export default app;
