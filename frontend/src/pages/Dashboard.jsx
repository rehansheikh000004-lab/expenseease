import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../api";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [title,setTitle] = useState("");
  const [amount,setAmount] = useState("");
  const [data,setData] = useState([]);

  const load = async () => {
    const res = await axios.get(`${API_BASE}/api/expenses/${user._id}`);
    setData(res.data);
  };

  const add = async () => {
    await axios.post(`${API_BASE}/api/expenses`, {
      userId: user._id,
      title,
      amount,
      date: new Date().toLocaleDateString()
    });
    load();
  };

  const del = async (id) => {
    await axios.delete(`${API_BASE}/api/expenses/${id}`);
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="dash">
      <h2>Hello {user.name}</h2>

      <div className="add-box">
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <input placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
        <button onClick={add}>Add</button>
      </div>

      <div className="list">
        {data.map(e=>(
          <div className="card" key={e._id}>
            <h3>{e.title}</h3>
            <p>₹ {e.amount}</p>
            <button onClick={()=>del(e._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
