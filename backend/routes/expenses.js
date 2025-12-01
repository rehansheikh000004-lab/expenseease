import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// Get all expenses
router.get("/:userId", async (req, res) => {
  const expenses = await Expense.find({ userId: req.params.userId });
  res.json(expenses);
});

// Add expense
router.post("/", async (req, res) => {
  try {
    const { userId, title, amount } = req.body;
    const exp = await Expense.create({ userId, title, amount });
    res.json(exp);
  } catch (err) {
    res.status(500).json({ message: "Error adding expense" });
  }
});

export default router;
