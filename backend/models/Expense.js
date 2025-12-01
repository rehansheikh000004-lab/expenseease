import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.models.Expense || mongoose.model("Expense", expenseSchema);
