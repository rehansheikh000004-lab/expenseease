import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  userId: String,
  title: String,
  amount: Number,
  date: String
});

export default mongoose.models.Expense || mongoose.model("Expense", expenseSchema);
