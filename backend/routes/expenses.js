import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, title, amount, date } = req.body;
  const e = await Expense.create({ userId, title, amount, date });
  res.json(e);
});

router.get("/:userId", async (req, res) => {
  const data = await Expense.find({ userId: req.params.userId });
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
