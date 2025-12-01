import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../api";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("ex_user"));
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  if (!user) {
    window.location.href = "/login";
    return null;
  }

  const load = async () => {
    const res = await axios.get(`${API_BASE}/api/expenses/${user.id}`);
    setExpenses(res.data);
  };

  useEffect(() => { load(); }, []);

  const add = async () => {
    await axios.post(`${API_BASE}/api/expenses`, {
      userId: user.id,
      title,
      amount
    });
    setTitle("");
    setAmount("");
    load();
  };

  return (
    <div className="center">
      <h2>{user.username}'s Expense Dashboard</h2>

      <input placeholder="Expense title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
      <button onClick={add}>Add Expense</button>

      <ul>
        {expenses.map((e)=>(
          <li key={e._id}>{e.title} — ₹{e.amount}</li>
        ))}
      </ul>
    </div>
  );
}
