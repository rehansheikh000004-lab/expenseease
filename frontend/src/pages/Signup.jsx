import { useState } from "react";
import axios from "axios";
import { API_BASE } from "../api";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_BASE}/api/auth/signup`, { name, email, password });
    nav("/login");
  };

  return (
    <div className="center">
      <h2>Signup</h2>
      <form onSubmit={submit}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button>Create</button>
      </form>
      <p>Have account? <Link to="/login">Login</Link></p>
    </div>
  );
}
