import React from "react";
import { useState } from "react";
import axios from "axios";
import { API_BASE } from "../api";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${API_BASE}/api/auth/login`, { email, password });
    localStorage.setItem("mm_user", JSON.stringify(res.data.user));
    nav("/");
  };

  return (
    <div className="center">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button>Login</button>
      </form>
      <p>New? <Link to="/signup">Signup</Link></p>
    </div>
  );
}
