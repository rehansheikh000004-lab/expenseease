import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import expenseRoutes from "./routes/expenses.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(() => console.log("DB error"));

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

app.get("/", (req, res) => res.send("ExpenseEase backend running"));

app.listen(5000, () => console.log("Server running"));
