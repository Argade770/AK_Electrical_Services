import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminAuth.css";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setError("");

    const savedUsername =
      localStorage.getItem("adminUsername") || "admin";

    const savedPassword =
      localStorage.getItem("adminPassword") || "admin123";

    if (
      username.trim() === savedUsername &&
      password === savedPassword
    ) {
      sessionStorage.setItem("adminLoggedIn", "true");
      navigate("/admin-dashboard");
    } else {
      setError("Invalid Username or Password!");
    }
  }

  return (
    <main className="admin-auth-page">
      <form className="admin-auth-card" onSubmit={handleLogin}>
        <div className="admin-auth-icon">🔐</div>

        <h1>Admin Login</h1>
        <p>Login to access your dashboard</p>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="auth-error">{error}</p>}

        <button type="submit">Login</button>

        <small>AK Electrical Services</small>
      </form>
    </main>
  );
}