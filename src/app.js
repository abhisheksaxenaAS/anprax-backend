// Load environment variables
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());

// Allowed origins from .env
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Routes
app.use("/contact", contactRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

export default app;
